const express         = require("express");
const userRouter      = express.Router();
const userController  = require("../controllers/user_controller");

userRouter.get('/', userController.findAllUsers);

userRouter.post('/', userController.createUser);
userRouter.get("/:id", userController.findUser);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter