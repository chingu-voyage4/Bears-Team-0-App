const express         = require("express");
const quizRouter      = express.Router();
const quizController  = require("../controllers/quiz_controller");

/*
GET all quizzes
*/
quizRouter.get("/all", quizController.readAllQuizzes);

/*
QUIZ CRUD Routes
*/

/*
POST create quiz
*/
quizRouter.post("/", quizController.createQuiz);

/*
GET user by id
*/
quizRouter.get("/:id", quizController.findQuiz);

//Update
quizRouter.post("/addquestion", quizController.addQuestion);

//Delete
quizRouter.post("/deleteHardCodedQuiz", quizController.deleteQuiz);

module.exports = quizRouter