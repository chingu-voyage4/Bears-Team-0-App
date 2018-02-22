const bcrypt = require('bcrypt')
const log   = require('debug')('api:User')
const error = require('debug')('api:error')

module.exports = class User {
  constructor(username, roles, password) {
    this.username = username
    this.roles = roles
    this.password = password
    this.encryptPw = this.encryptPw.bind(this)
    this.checkPw = this.checkPw.bind(this)
  }
  /*
  An idea of how to save an encrypted pw before saving to the DB
  */
  encryptPw () {
    return new Promise((resolve, reject) => {
      bcrypt.hash(this.password, 5, (err, result) => {
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