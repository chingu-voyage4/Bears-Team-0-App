const express = require("express");
const quizRouter = express.Router();
const quizController = require("../controllers/quiz_controller");

quizRouter.get("/", quizController.landing);

module.exports = quizRouter