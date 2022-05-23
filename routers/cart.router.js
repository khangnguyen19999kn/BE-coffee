const express = require ('express');
const cartRouter = express.Router();
const {createOrder} =require('../controllers/cart.controller');

cartRouter.post("/", createOrder )

module.exports={

    cartRouter,
}
