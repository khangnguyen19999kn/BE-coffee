const express = require ('express');
const userRouter = express.Router();
const {register,login,checkPhoneNumber,decodeToken} = require("../controllers/user.controller")

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.post("/checkPhone",checkPhoneNumber);
userRouter.post("/decode",decodeToken);


module.exports={
    userRouter
}