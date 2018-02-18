const mongodb = require("mongodb");
const mongoClient = require("mongodb").MongoClient;

let db;

const MONGO = process.env.MONGO_URL;
const DATABASE_NAME = process.env.DB_NAME;

if (db) {
    db.on("connection", () => {
        console.log("mongo connected");
    });
    db.on("disconnected", () => {
        console.log("mongo disconnected");
    })
};

function dbConnection () {
    return new Promise((resolve, reject) => {
        if (db) return resolve(db)
        mongoClient.connect(MONGO, (err, _db) => {
            if (err) return reject(err)
            db = _db.db(DATABASE_NAME)
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
                        console.log('DOC', doc)
                        resolve(doc)
                    }
                    else {
                        console.log('NO DOC')
                        reject(null)
                    }
                });
        })
        .catch(err => {
            throw new Error(err)
        });
    });
};