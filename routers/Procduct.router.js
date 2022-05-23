const express = require ('express');
const productRouter = express.Router();
const {createProduct,getAllProduct,getDetailProduct,updateProduct,deleteProduct} = require('../controllers/product.controller');
const { authen } = require('../middlewares/authen/authenticate');


productRouter.post("/", createProduct )
productRouter.get("/", getAllProduct)
productRouter.get("/:id", getDetailProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)
module.exports={

    productRouter,
}