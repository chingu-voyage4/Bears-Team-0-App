const util = require('util')
const userModel = require('../models/user/mongodb_user')

const log   = require('debug')('api:controller-user')
const error = require('debug')('api:error')
/*
Creating a user
*/
module.exports.createUser = function(req, res, next) {
    /*
    This is hardcoded for initial testing
    */
    userModel.create({ username: 'Bob', password: 'blah', roles: ['admin'] })
    .then(user => {
        log('Sending new user: ' + util.inspect(user))
        res.json({ data: user })
    }).catch(err => next(err))
}
/*
Reading a user
*/
module.exports.findUser = function(req, res, next){
    /*
    This is hardcoded for initial testing
    */
    userModel.read(req.params.id)
    .then(found => {
        log('Sending user ' + found)
        res.json({ data: found })
    })
    .catch(err => next(err))
};
/*
Reading all users (Testing route)
*/
module.exports.findAllUsers = function(req, res, next) {
    userModel.readAll()
    .then(docs => {
        log('Sending all users')
        res.json({ data: docs })
    }).catch(err => next(err))
}
/*
Deleting a user
*/
module.exports.deleteUser = function(req, res, next) {
    userModel.destroy(req.params.id).then(deleted => {
        res.json({ data: deleted })
    }).catch(err => next(err))
}