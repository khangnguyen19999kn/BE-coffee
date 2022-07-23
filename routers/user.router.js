const express = require ('express');
const userRouter = express.Router();
const {register,login,checkPhoneNumber,decodeToken,getAllUsers,deleteUser,updateUser} = require("../controllers/user.controller")

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.post("/checkPhone",checkPhoneNumber);
userRouter.post("/decode",decodeToken);
userRouter.get("/", getAllUsers)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)


module.exports={
    userRouter
}