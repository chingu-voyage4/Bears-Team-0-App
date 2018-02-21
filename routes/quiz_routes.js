const express         = require("express");
const quizRouter      = express.Router();
const quizController  = require("../controllers/quiz_controller");

//Create
quizRouter.post("/new", quizController.addQuiz);

//Retrieve
quizRouter.get("/", quizController.findQuiz);

module.exports = quizRouter