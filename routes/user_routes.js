const express         = require("express");
const userRouter      = express.Router();
const userController  = require("../controllers/user_controller");

userRouter.get('/', userController.findAllUsers)
userRouter.get("/:id", userController.findUser);
userRouter.post('/new', userController.createUser)

module.exports = userRouter