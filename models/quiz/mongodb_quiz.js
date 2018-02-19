const mongodb       = require("mongodb");
const mongoClient   = require("mongodb").MongoClient;
const util          = require('util');
const config        = require('../../config')
const Quiz          = require('./Quiz');

const log   = require('debug')('api:mongodb-quiz');
const error = require('debug')('api:error');

let db;

const MONGO_URL         = config.MONGO_QUIZES_URL;
const DATABASE_NAME     = config.MONGO_QUIZES_DBNAME;
const COLLECTION_NAME   = 'quizes';

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

exports.read = function read(key) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME)
        let objectID = new mongodb.ObjectId(key)
        return collection.findOne({_id: objectID})
            .then(doc => {
                const quiz = new Quiz(
                    doc.title
                )
                log(`Quiz found ${util.inspect(quiz)}`)
                return quiz
            })
    })
}
