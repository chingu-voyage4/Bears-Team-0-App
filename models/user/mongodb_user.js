const mongodb       = require("mongodb");
const util          = require('util')
const config        = require('../../config')
const User          = require('./User')

const mongoConnection = require('../mongodb')

const log   = require('debug')('api:mongodb-user')
const error = require('debug')('api:error')

const MONGO_URL         = config.MONGO_USERS_URL;
const DATABASE_NAME     = config.MONGO_USERS_DBNAME;
const COLLECTION_NAME   = 'users'

/*
DB Connection Handler
If connected returns connection else grabs connection from mLab
*/
const mongo = new mongoConnection(MONGO_URL, DATABASE_NAME, COLLECTION_NAME)

mongo.connect()

mongo.on('connected', () => {
    log('Mongo ' + mongo.db_name + ' connected')
})

mongo.on('error', () => {
    error('Error with mongo ', err);
    mongo.connect()
})

mongo.on('disconnected', () => {
    log('Mongo ' + mongo.db_name + ' disconnected')
})

/**
 * Find a user
 * @param {String} key: user._id
 * @returns {User} - The found user.
 */
exports.read = function read(key) {
    return mongo.collection.findOne({id: key}).then(doc => {
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
}
/**
 * Save a user to the db
 * @param {Object} 
 * @returns {User} - The saved user.
 */
exports.create = function create(user) {
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
    return mongo.collection.insertOne(newUser).then(created => {
        log("Created user: " + util.inspect(created.ops[0]))
        const createdUser = new User({
            id: created.ops[0].id,
            displayName: created.ops[0].displayName,
            familyName: created.ops[0].familyName,
            givenName: created.ops[0].givenName,
            emails: created.ops[0].emails,
            photos: created.ops[0].photos,
            gender: created.ops[0].gender,
            provider: created.ops[0].provider
        })
        log('Returning inserted: ' + util.inspect(createdUser))
        
        return createdUser
    })
}
/**
 * Get all users
 * @param {}
 * @returns {User[]} - An array of users.
 */
exports.readAll = function readAll() {
    return mongo.collection.find().toArray().then(docs => {
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
        
        return returnUsers
    })

}
/**
 * Update a user
 * @param {String} key - user._id
 * @param {Object} updateObj
 * @returns {User} - The updated user.
 */
exports.update = function update(key, updateObj) {
    return mongo.collection.findOneAndUpdate({ id: key }, { $set: updateObj }).then(result => {
        log('User updated: ' + util.inspect(result))
        
        return new User({
            id: result.value.id,
            displayName: result.value.displayName,
            familyName: result.value.familyName,
            givenName: result.value.givenName,
            emails: result.value.emails,
            photos: result.value.photos,
            gender: result.value.gender,
            provider: result.value.provider
        })
    })
}

/**
 * Delete a user
 * @param {String} key - user._id
 * @returns {User} - The deleted User .
 */
exports.destroy = function destroy(key) {
    return mongo.collection.findOneAndDelete({ id: key }).then(deletedDoc => {
        log('Mongo deleted user: ' + util.inspect(deletedDoc.value))
        
        return deletedDoc.value
    })
}
/**
 * Get count of # users
 */
exports.count = function count() {
    return mongo.collection.count()
}

exports.findOrCreate = function findOrCreate(profile) {
    return mongo.collection.findOne({id: profile.id}).then(user => {
        if (user) {
            log("findOrCreate found user: " + util.inspect(user))
            
            return user;
        }
        log('findOrCreate user: ' + util.inspect(user))
        
        return exports.create(profile)
    })
}