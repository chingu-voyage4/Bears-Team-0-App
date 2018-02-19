const express         = require("express");
const quizRouter      = express.Router();
const quizController  = require("../controllers/quiz_controller");

quizRouter.get("/", quizController.findQuiz);

module.exports = quizRouter