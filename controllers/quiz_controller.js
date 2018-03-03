const quizModel = require('../models/quiz/mongodb_quiz');
const Question = require('../models/quiz/Question');

const log   = require('debug')('api:controller-quiz');
const error = require('debug')('api:error');


/*
Reading a quiz
*/
module.exports.findQuiz = function(req, res, next){
    quizModel.read(req.params.id)
    .then(found => {
        log('Sending quiz ' + found);
        res.json({ data: found });
    })
    .catch(err => next(err));
};

/*
Reading all quizzes (Testing route)
*/
module.exports.findAllQuizzes = function(req, res, next) {
    quizModel.readAll()
    .then(docs => {
        log('Sending all quizzes');
        res.json({quizzes: docs});
    }).catch(err => next(err));
}

/*
Creating a user
*/
module.exports.createQuiz = function(req, res, next) {
    quizModel.create(req.body.quiz)
    .then((quiz) => {
        // log('Sending new quiz: + util.inspect(quiz)');
        res.json({ quiz: quiz });
    }).catch(err => next(err));
}

module.exports.deleteQuiz = function(req, res, next) {
    const user = quizModel.deleteQuiz("5a8eef4f4796351bcccb4d1d");

    user.then(() => {
        log('Deleting quiz ');
        quizModel.readAll();
        res.json({status: "quiz deleted"});
    })
    .catch(e => next(e))
}

/*
Updating a user
*/
module.exports.updateQuiz = function(req, res, next) {
    quizModel.update(req.params.id, req.body.update)
    .then(updated => {
        res.json({ user: updated })
    }).catch(err => next(err));
}