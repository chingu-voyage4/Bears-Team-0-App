const mongodb       = require("mongodb");
const mongoClient   = require("mongodb").MongoClient;
const util          = require('util')

const log   = require('debug')('api:mongodb')

class MongoConnection {
  constructor(url, dbname, collection) {
    this.url = url
    this.dbName = dbname
    this.collection = collection
    this.db = false
  }

  connectDb () {
    return new Promise((resolve, reject) => {
        if (this.db) return resolve(this.db)
        mongoClient.connect(this.url, (err, _db) => {
            if (err) return reject(err)
            this.db = _db.db(this.dbName)
            log('Mongo connected ' + util.inspect(this.db.databaseName))
            resolve(this.db)
        })
    })
  }

  readAll () {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).find().toArray()
    })
  }

  count () {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).count({})
    })
  }

  read (query) {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).findOne(query)
    })
  }

  create (user) {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).insertOne(user)
    })
  }

  update (query, updateObj) {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).findOneAndUpdate(query, updateObj)
    })
  }

  del (query) {
    return this.connectDb().then(_db => {
      return _db.collection(this.collection).findOneAndDelete(query)
    })
  }

}

module.exports = MongoConnection