const express         = require("express");
const userRouter      = express.Router();
const userController  = require("../controllers/user_controller");

userRouter.get("/", userController.findUser);

module.exports = userRouter