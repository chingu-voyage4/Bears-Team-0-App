const quizModel = require('../models/quiz/mongodb_quiz')

const log   = require('debug')('api:controller-quiz')
const error = require('debug')('api:error')

module.exports.findQuiz = function(req, res, next){
    /*
    This is hardcoded for initial testing
    */
    const user = quizModel.read("5a8a625a734d1d041bb74229")

    user.then(x => {
        log('Sending quiz ' + x)
        res.json({ data: x })
    })
    .catch(e => next(e))
};