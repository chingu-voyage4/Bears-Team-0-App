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