const express         = require("express");
const userRouter      = express.Router();
const userController  = require("../controllers/user_controller");


/*
GET user count
*/
userRouter.get('/count', userController.getUserCount);
/*
GET all users
*/
userRouter.get('/', userController.findAllUsers);

/*
USER CRUD Routes
*/

/*
POST create user
*/
userRouter.post('/', userController.createUser);
/*
GET user by id
*/
userRouter.get("/:id", userController.findUser);
/*
DELETE user by id
*/
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter