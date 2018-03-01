const express     = require('express');
const router      = express.Router();
const quizRouter  = require('./quiz_routes');
const userRouter  = require('./user_routes')

router.use('/quizzes', quizRouter);
router.use('/users', userRouter)

module.exports = router;
