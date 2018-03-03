const express         = require("express");
const quizRouter      = express.Router();
const quizController  = require("../controllers/quiz_controller");

/*
GET all quizzes
*/
quizRouter.get("/", quizController.findAllQuizzes);

/*
QUIZ CRUD Routes
*/

/*
POST create quiz
*/
quizRouter.post("/", quizController.createQuiz);

/*
GET quiz by id
*/
quizRouter.get("/:id", quizController.findQuiz);

/*
PUT quiz
*/
quizRouter.put("/:id", quizController.updateQuiz);

/*
DELETE user by id
*/
quizRouter.delete("/:id", quizController.deleteQuiz);

module.exports = quizRouter