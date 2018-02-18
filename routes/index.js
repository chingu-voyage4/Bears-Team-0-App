const express = require('express');
const router = express.Router();
const quizRouter = require('./quiz_routes');

router.use('/quizzes', quizRouter);

module.exports = router;
