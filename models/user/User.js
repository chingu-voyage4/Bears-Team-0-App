const bcrypt = require('bcrypt')
const log   = require('debug')('api:User')
const error = require('debug')('api:error')

module.exports = class User {
  constructor(profile) {
    this.googleId = profile.googleId
    this.displayName = profile.displayName
    this.familyName = profile.familyName,
    this.givenName = profile.givenName,
    this.emails = profile.emails,
    this.photos = profile.photos,
    this.gender = profile.gender,
    this.provider = profile.provider
  }
}