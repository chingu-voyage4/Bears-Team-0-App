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
                    doc.questions,
                    doc.description,
                    doc.favorites
                )
                log(`Quiz found ${util.inspect(quiz)}`);
                return quiz;
            });
    });
}


/**
 * Get user quizzes
 * @param {Object} key: user.id
 * @returns {Quiz[]} - An array of user's quizzes.
 */
exports.readUserQuizzes = function readUserQuizzes(userId) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        //let objectID = new mongodb.ObjectId(userId);
        /*
        NOT USING REAL OBJECT ID DUE TO TESTING ENV
        */
        return new Promise((resolve, reject) => {
            return collection.find({ author: userId }).toArray((err, docs) => {
                if (err) return reject(err);
                const returnQuizzes = docs.map(quiz => {
                    return new Quiz(quiz.title, quiz.author, quiz.questions, quiz.description, quiz.favorites);
                });
                return resolve(returnQuizzes);
            });
        });
    })
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
                    return new Quiz(quiz.title, quiz.questions, quiz.description, quiz.favorites);
                });
                return resolve(returnQuizzes);
            });
        });
    })
}

/**
 * Get 6 most popular quizzes
 * @param {}
 * @returns {Quiz[]} - An array of quizzes.
 */
exports.readPopular = function readPopular() {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        return new Promise((resolve, reject) => {
            return collection.find().sort({"favorites": -1}).limit(6).toArray((err, docs) => {
                if (err) return reject(err);
                const returnQuizzes = docs.map(quiz => {
                    return new Quiz(quiz.title, quiz.questions, quiz.description, quiz.favorites);
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
exports.create = function create(userId, quiz) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        let newQuiz = new Quiz(quiz.title, userId, quiz.questions, quiz.description);
        return collection.insertOne(newQuiz)
            .then(created => {
            log('Mongo new quiz inserted: ' + util.inspect(created.ops[0]));
            const createdQuiz = new Quiz(
                created.ops[0].title,
                created.ops[0].author,
                created.ops[0].questions,
                created.ops[0].description
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
exports.destroy = function destroy(key) {
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
exports.update = function update(key, updateObj) {
    return exports.connectDb().then(_db => {
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

/**
 * Update a quiz
 * @param {String} key - quiz._id
 * @param {Object} updateObj
 * @returns {Quiz} - The updated quiz.
 */
exports.updateFavorites = function updateFavorites(key, updateFavorites) {
    return exports.connectDb().then(_db => {
        let collection = _db.collection(COLLECTION_NAME);
        let objectID = new mongodb.ObjectId(key);
        const updateFavoritesNumber = parseInt(updateFavorites);
        return collection.findOneAndUpdate({ _id: objectID }, { $inc: { favorites: updateFavoritesNumber } })
            .then(updated => {
                log("Quiz update: " + util.inspect(updated));
                return updated.value;
            });
    });
}

/**
 * Get count of # quizzes
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