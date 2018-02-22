const bcrypt = require('bcrypt')
const log   = require('debug')('api:User')
const error = require('debug')('api:error')

module.exports = class User {
  constructor(username, roles, _id = undefined) {
    this._id = _id
    this.username = username
    this.roles = roles
    this.encryptPw = this.encryptPw.bind(this)
    this.checkPw = this.checkPw.bind(this)
  }
  /*
  An idea of how to save an encrypted pw before saving to the DB
  */
  encryptPw (password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 5, (err, result) => {
        if (err) return reject(err)
        log('Encrypted ' + result)
        this.password = result
        resolve(result)
      })
    })
  }

  checkPw (passwordToCheck) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(passwordToCheck, this.password, (err, res) => {
        if (err) return reject(err)
        log('Checking password')
        resolve(res)
      })
    })
  }
}