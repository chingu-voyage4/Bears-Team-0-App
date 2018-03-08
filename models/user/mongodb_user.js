const mongodb       = require("mongodb");
const mongoClient   = require("mongodb").MongoClient;
const util          = require('util')
const config        = require('../../config')
const User          = require('./User')

const log   = require('debug')('api:mongodb-user')
const error = require('debug')('api:error')

let db;

const MONGO_URL         = config.MONGO_USERS_URL;
const DATABASE_NAME     = config.MONGO_USERS_DBNAME;
const COLLECTION_NAME   = 'users'

/*
DB Connection Handler
If connected returns connection else grabs connection from mLab
*/
exports.connectDb = function connectDb () {
    return new Promise((resolve, reject) => {
        if (db) return resolve(db)
        mongoClient.connect(MONGO_URL, (err, _db) => {
            if (err) return reject(err)
            db = _db.db(DATABASE_NAME)
            log('Mongo connected ' + util.inspect(db.databaseName))
            resolve(db)
        })
    })
}
/**
 * Find a user
 * @param {String} key: user._id
 * @returns {User} - The found user.
 */
exports.read = function read(key) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        // let objectID = new mongodb.ObjectId(key)
        return collection.findOne({id: key})
            .then(doc => {
                if (!doc) return undefined
                const user = new User({
                    id: doc.id,
                    displayName: doc.displayName,
                    familyName: doc.familyName,
                    givenName: doc.givenName,
                    emails: doc.emails,
                    photos: doc.photos,
                    gender: doc.gender,
                    provider: doc.provider
                })
                log(`User found ${util.inspect(doc)}`)
                return user
            })
    })
}
/**
 * Save a user to the db
 * @param {Object} 
 * @returns {User} - The saved user.
 */
exports.create = function create(user) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        let newUser = new User({
            id: user.id,
            displayName: user.displayName,
            familyName: user.familyName,
            givenName: user.givenName,
            emails: user.emails,
            photos: user.photos,
            gender: user.gender,
            provider: user.provider
        })
        log("Create new user: " + util.inspect(newUser))
        return collection.insertOne(newUser).then(created => {
            log("Created user: " + util.inspect(user))
            const createdUser = new User({
                id: created.id,
                displayName: created.displayName,
                familyName: created.familyName,
                givenName: created.givenName,
                emails: created.emails,
                photos: created.photos,
                gender: created.gender,
                provider: created.provider
            })
            log('Returning inserted: ' + util.inspect(createdUser))
            return createdUser
        })

    })
}
/**
 * Get all users
 * @param {}
 * @returns {User[]} - An array of users.
 */
exports.readAll = function readAll() {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        return new Promise((resolve, reject) => {
            return collection.find().toArray((err, docs) => {
                if (err) return reject(err)
                const returnUsers = docs.map(user => {
                    return new User({
                        id: user.id,
                        displayName: user.displayName,
                        familyName: user.familyName,
                        givenName: user.givenName,
                        emails: user.emails,
                        photos: user.photos,
                        gender: user.gender,
                        provider: user.provider
                    })
                })
                return resolve(returnUsers)
            })
        })
    })
}
/**
 * Update a user
 * @param {String} key - user._id
 * @param {Object} updateObj
 * @returns {User} - The updated user.
 */
exports.update = function update(key, updateObj) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        let objectID = new mongodb.ObjectId(key)
        return collection.findOneAndUpdate({ _id: objectID }, { $set: updateObj }).then(result => { 
            log('User updated: ' + util.inspect(result))
            return new User({
                id: user.id,
                displayName: result.value.displayName,
                familyName: result.value.familyName,
                givenName: result.value.givenName,
                emails: result.value.emails,
                photos: result.value.photos,
                gender: result.value.gender,
                provider: result.value.provider
            })
         })
    });
}

/**
 * Delete a user
 * @param {String} key - user._id
 * @returns {User} - The deleted User .
 */
exports.destroy = function destroy(key) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        let objectID = new mongodb.ObjectId(key)
        return collection.findOneAndDelete({ _id: objectID }).then(deletedDoc => {
            log('Mongo deleted user: ' + util.inspect(deletedDoc.value))
            return deletedDoc.value
        })
    })
}
/**
 * Get count of # users
 */
exports.count = function count() {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        return new Promise((resolve, reject) => {
            collection.count({}, (err, count) => {
                if (err) return reject(err)
                return resolve(count)
            })
        })
    })
}

exports.findOrCreate = function findOrCreate(profile) {
    return exports.read(profile.id).then(user => {
        if (user) {
            log("findOrCreate found user: " + util.inspect(user))
            return user;
        }
        log('findOrCreate user: ' + util.inspect(user))
        return exports.create(profile)
    })
}