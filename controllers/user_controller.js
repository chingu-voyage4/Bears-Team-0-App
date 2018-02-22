const util = require('util')
const userModel = require('../models/user/mongodb_user')

const log   = require('debug')('api:controller-user')
const error = require('debug')('api:error')

module.exports.findUser = function(req, res, next){
    /*
    This is hardcoded for initial testing
    */
    const user = userModel.read("5a8a6277734d1d041bb7422e")

    user.then(x => {
        log('Sending user ' + x)
        res.json({ data: x })
    })
    .catch(e => next(e))
};

module.exports.createUser = function(req, res, next) {
    const newUser = userModel.create({ username: 'Bob', password: 'blah', roles: ['admin'] })

    newUser.then(user => {
        log('Sending new user: ' + util.inspect(user))
        res.json(user)
    }).catch(err => next(err))
}

module.exports.findAllUsers = function(req, res, next) {
    const users = userModel.readAll()

    users.then(docs => {
        log('Sending all users')
        res.json(docs)
    }).catch(err => next(err))
}