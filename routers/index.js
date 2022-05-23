const express = require('express');
const rootRouter = express.Router();
const { productRouter } = require('../routers/Procduct.router');
const { userRouter } = require('./user.router');
const { cartRouter } = require('./cart.router');
const { defaultRouter } = require('./default.route');




rootRouter.use('/product', productRouter);
rootRouter.use('/users', userRouter);
rootRouter.use('/cart', cartRouter);

rootRouter.use('/', defaultRouter)

module.exports = {
    rootRouter
}