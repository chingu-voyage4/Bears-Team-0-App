const express         = require("express");
const userRouter      = express.Router();
const userController  = require("../controllers/user_controller");

const auth = require("../auth")
/*
GET user count
*/
userRouter.get('/count', userController.getUserCount);
/*
GET all users
*/
userRouter.get('/', auth.jwtCheck, userController.findAllUsers);

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
PUT user
*/
userRouter.put("/:id", userController.updateUser);
/*
DELETE user by id
*/
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter