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
 * Find a quiz
 * @param {String} key: quiz._id
 * @returns {Quiz} - The found quiz.
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
 * Get all quizzes
 * @param {}
 * @returns {Quiz[]} - An array of quizzes.
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

/**
 * Save a quiz to the db
 * @param {Object} 
 * @returns {Quiz} - The saved quiz.
 */
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

/**
 * Delete a quiz
 * @param {String} key - quiz._id
 * @returns {Quiz} - The deleted quiz .
 */
exports.deleteQuiz = function destroy(key) {
    return exports.connectDb().then( _db => {
        let collection = _db.collection(COLLECTION_NAME);
        let objectID = new mongodb.ObjectId(key);
        return collection.findOneAndDelete({ _id: objectID })
            .then(deletedDoc => {
                log("Mongo deleted quiz: " + util.inspect(deletedDoc.value));
                return deletedDoc.value;
            });
    });
} 

/**
 * Update a quiz
 * @param {String} key - quiz._id
 * @param {Object} updateObj
 * @returns {Quiz} - The updated quiz.
 */
exports.udate = function update(key, updateObj) {
    return exports.connectDb.then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        let objectID = new mongodb.ObjectId(key);
        return collection.findOneAndUpdate({ _id: objectID }, { $set: updateObj })
            .then(result => {
                log("Quiz update: " + util.inspect(result));
                return new Quiz(
                    quiz.value.title,
                    quiz.value.questions
                )
            });
    });
}