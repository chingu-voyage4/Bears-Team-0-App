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
Reading 6 most popular quizzes
*/
module.exports.findPopularQuizzes = function(req, res, next) {
    quizModel.readPopular()
    .then(docs => {
        log('Sending popular quizzes');
        res.json({quizzes: docs});
    }).catch(err => next(err));
}

/*
Reading user's quizzes
*/
module.exports.findUserQuizzes = function(req, res, next) {
    quizModel.readUserQuizzes(req.body.user.id)
    .then(found => {
        log('Sending user\'s quizzes');
        res.json({quizzes: found});
    }).catch(err => next(err));
}

/*
Get # quizzes
*/
module.exports.getQuizCount = function(req, res, next) {
    quizModel.count().then(count => {
        log("Found # quizzes: " + count);
        res.json({ count: count });
    }).catch(err => next(err));
}

/*
Creating a quiz
*/
module.exports.createQuiz = function(req, res, next) {
    quizModel.create(req.body.user.id, req.body.quiz)
    .then((quiz) => {
        // log('Sending new quiz: + util.inspect(quiz)');
        res.json({ quiz: quiz });
    }).catch(err => next(err));
}

/*
Deleting a quiz
*/
module.exports.deleteQuiz = function(req, res, next) {
    quizModel.destroy(req.params.id)
        .then((deleted) => {
            res.json({quiz: deleted});
        }).catch(err => next(err));

}

/*
Updating a quiz
*/
module.exports.updateQuiz = function(req, res, next) {
    quizModel.update(req.params.id, req.body.update)
    .then(updated => {
        res.json({ quiz: updated })
    }).catch(err => next(err));
}