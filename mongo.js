const mongodb = require("mongodb");
const mongoClient = require("mongodb").MongoClient;

const log = require('debug')('api:mongo')
const error = require('debug')('api:error')

let db;

const MONGO = process.env.MONGO_URL;
const DATABASE_NAME = process.env.DB_NAME;

/*
DB Connection Handler
If connected returns connection else grabs connection from mLab
*/
function dbConnection () {
    return new Promise((resolve, reject) => {
        if (db) return resolve(db)
        mongoClient.connect(MONGO, (err, _db) => {
            if (err) return reject(err)
            db = _db.db(DATABASE_NAME)
            log('Mongo connected ' + db.databaseName)
            resolve(db)
        })
    })
}

exports.read = function read() {
    return new Promise((resolve, reject) => {
        return dbConnection()
        .then((_db) => {
            let collection = _db.collection('users')
                collection.findOne({ username: "test-user"})
                .then(doc => {
                    if (doc) {
                        log('DOC', doc)
                        resolve(doc)
                    }
                    else {
                        log('NO DOC')
                        reject(null)
                    }
                });
        })
        .catch(err => {
            throw new Error(err)
        });
    });
};