const express = require ('express');
const rootRouter = express.Router();
const {productRouter}=require('../routers/Procduct.router')


rootRouter.use('/product',productRouter);

module.exports={
    rootRouter
}