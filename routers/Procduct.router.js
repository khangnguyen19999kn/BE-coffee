const express = require ('express');
const productRouter = express.Router();
const {createProduct,getAllProduct,getDetailProduct,updateProduct,deleteProduct} = require('../controllers/product.controller');
const { authen } = require('../middlewares/authen/authenticate');
const {authorize} = require('../middlewares/authen/authorize');
const multer  = require('multer');
const { uploadImage } = require('../middlewares/upload/uploadImage');



productRouter.post("/",uploadImage(), createProduct )
productRouter.get("/", getAllProduct)
productRouter.get("/:id", getDetailProduct)
productRouter.put("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)

//upload ảnh test


productRouter.post('/stats',uploadImage(), function (req, res) {
    // const {id}=req.body
    console.log(req)
    // console.log(req.body)
 });
module.exports={

    productRouter,
}