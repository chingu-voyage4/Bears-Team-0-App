const mongo = require('../mongo')

const log = require('debug')('api:controller-quiz')
const error = require('debug')('api:error')

module.exports.landing = function(req, res, next){
    const user = mongo.read()

    user.then(x => {
        log('Sending data ' + x)
        res.json({ data: x })
    })
    .catch(e => next(e))
};