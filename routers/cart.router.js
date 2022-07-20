const express = require ('express');
const cartRouter = express.Router();
const {createOrder,getAllOrder,getDetailOrder,changeStatusorder,deleteOrder} =require('../controllers/cart.controller');

cartRouter.post("/", createOrder )
cartRouter.get("/", getAllOrder)
cartRouter.get("/detail/:id", getDetailOrder)
cartRouter.put("/:id",changeStatusorder)
cartRouter.delete("/:id",deleteOrder)
module.exports={

    cartRouter,
}
