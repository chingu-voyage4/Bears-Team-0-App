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

/**
 * Find a user
 * @param {String} key: quiz._id
 * @returns {Quiz} - The found user.
 */
exports.read = function read(key) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        let objectID = new mongodb.ObjectId(key);
        return collection.findOne({_id: objectID})
            .then(doc => {
                const quiz = new Quiz(
                     doc.title,
                     doc.questions
                )
                log(`Quiz found ${util.inspect(quiz)}`);
                return quiz;
            });
    });
}

/**
 * Get all users
 * @param {}
 * @returns {Quiz[]} - An array of users.
 */
exports.readAll = function readAll() {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        return new Promise((resolve, reject) => {
            return collection.find().toArray((err, docs) => {
                if (err) return reject(err);
                const returnQuizzes = docs.map(quiz => {
                    return new Quiz(quiz.title, quiz.questions, quiz._id);
                });
                return resolve(returnQuizzes);
            });
        });
    })
}

exports.create = function create(quiz) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        let newQuiz = new Quiz(quiz.title, quiz.questions);
        return collection.insertOne(newQuiz)
            .then(created => {
            log('Mongo new quiz inserted: ' + util.inspect(created.ops[0]));
            const createdQuiz = new Quiz(
                created.ops[0].title,
                created.ops[0].questions
            );
            log('Returning inserted: ' + util.inspect(createdQuiz));
            return createdQuiz;
        });
    })
}

exports.deleteQuiz = function deleteQuiz(key) {
    return exports.connectDb().then( _db => {
        let collection = _db.collection(COLLECTION_NAME);
        let objectID = new mongodb.ObjectId(key);
        try {
            return collection.deleteOne( {_id: objectID} );
        } catch (err) {
            log(err);
        }
    })
} 
