const mongodb       = require("mongodb");
const mongoClient   = require("mongodb").MongoClient;
const util          = require('util')
const EventEmitter  = require("events")

const log   = require('debug')('api:mongodb')

class MongoConnection extends EventEmitter {
 
  constructor(url, db_name, collection_name) {
    super ()
    this.url = url
    this.db_name = db_name
    this.collection_name = collection_name
  }

  async connect () {
    if (this.connection) {
      return this.connection
    } else {
      try {
        this.connection = await mongoClient.connect(this.url, {keepAlive: 2000})
        this.collection = await this.connection.db(this.db_name).collection(this.collection_name)
        this.emit('connected')
      } catch (err) {
        this.emit('error', err)
      }
    }
  }

}

module.exports = MongoConnection