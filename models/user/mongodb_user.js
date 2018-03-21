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

/**
 * Find a user
 * @param {String} key: user._id
 * @returns {User} - The found user.
 */
exports.read = function read(key) {
    return mongo.collection.findOne({id: key})
        .then(doc => {
          if (!doc) {
            return undefined;
          } else {
            log(`User found ${util.inspect(doc)}`);
            return serializeUser(doc)
          }
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
        return serializeUser(created)
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
            return serializeUser(user)
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
        
        return serializeUser(result.value)
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
            return serializeUser(user);
            
        }
        log('findOrCreate user: ' + util.inspect(user))
        
        return exports.create(profile)
    })
}

function serializeUser (user) {
    log('serializing ' + util.inspect(user))
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
}