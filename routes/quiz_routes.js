const express         = require("express");
const quizRouter      = express.Router();
const quizController  = require("../controllers/quiz_controller");

//Create
quizRouter.post("/new", quizController.addQuiz);

//Retrieve
quizRouter.get("/all", quizController.readAllQuizzes);
quizRouter.get("/", quizController.findQuiz);

//Delete
quizRouter.post("/deleteHardCodedQuiz", quizController.deleteQuiz);

module.exports = quizRouter