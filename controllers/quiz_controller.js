const quizModel = require('../models/quiz/mongodb_quiz')

const log   = require('debug')('api:controller-quiz')
const error = require('debug')('api:error')

module.exports.findQuiz = function(req, res, next){
    /*
    This is hardcoded for initial testing
    */
    const user = quizModel.read("5a8db085ede1ae12a48d660e")

    user.then(x => {
        log('Sending quiz ' + x)
        res.json({ data: x })
    })
    .catch(e => next(e))
};

module.exports.readAllQuizzes = function(req, res, next) {
    const user = quizModel.readAll();
    user.then(x => {
            res.json({data: x});
        })
        .catch(e => next(e));
}

module.exports.addQuiz = function(req, res, next) {
    const addQuizPromise = quizModel.addAnotherQuiz()
    addQuizPromise.then(() => {
        //readAll logs all quizzes to see if successful
        quizModel.readAll();
        res.json({status: "success"});
    }
    ).catch(e => next(e));
}

module.exports.deleteQuiz = function(req, res, next) {
    /*
    This is hardcoded for initial testing. Use request param later
    */
    const user = quizModel.deleteQuiz("5a8eef4f4796351bcccb4d1d");

    user.then(() => {
        log('Deleting quiz ');
        quizModel.readAll();
        res.json({status: "quiz deleted"});
    })
    .catch(e => next(e))
}

module.exports.addQuestion = function(req, res, next) {
    /*
    This is hardcoded for initial testing. Use request param later
    */
//    const user = quizModel.
}