const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;

let db;
if (db) {
    db.on("connection", () => {
        console.log("mongo connected");
    });
    db.on("disconnected", () => {
        console.log("mongo disconnected");
    })
};
//immediately invoked function
let dbConnection = (() => {
    return new Promise((resolve, reject) => {
        if (db) { return resolve(db); }
        mongoClient.connect(process.env.MONGO_URL, (err, _db) => {
            if (err) { return reject(err); }
            db = _db;
            resolve(db);
        });
    });
})();