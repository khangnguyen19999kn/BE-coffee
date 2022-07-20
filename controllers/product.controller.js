const { Product } = require('../models');




const createProduct = async (req, res) => {
    const { file } = req
    const { name, price, priceDefaut, type, introduce } = req.body;
    const urlImg = `http://34.229.140.188:9696/${file.path}`
    // console.log(req.body, file.path)

    try {

        const newProduct = await Product.create({ name, price, priceDefaut, type, img:urlImg , introduce })
        res.status(201).send(newProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllProduct = async (req, res) => {
    try {
        const listProduct = await Product.findAll();

        res.status(200).send(listProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}
const getDetailProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const detailProcduct = await Product.findOne({
            where: {
                id,
            }
        })
        res.status(200).send(detailProcduct)
    } catch (error) {
        res.status(500).send(error)
    }
}
const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price, priceDefaut, type, img, introduce } = req.body;
    try {
        const detailProcduct = await Product.findOne({
            where: {
                id,
            }
        });
        detailProcduct.name = name;
        detailProcduct.price = price;
        detailProcduct.priceDefaut = priceDefaut;
        detailProcduct.type = type;
        detailProcduct.img = img;
        detailProcduct.introduce = introduce;

        await detailProcduct.save();
        res.status(200).send(detailProcduct)
    } catch (error) {
        res.status(500).send(error)
    }
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.destroy({
            where: {
                id
            }
        })
        res.status(200).send("Xóa thành công")
    } catch (error) {
        res.status(500).send(error)
    }
}


///a


module.exports = {
    createProduct, getAllProduct, getDetailProduct, updateProduct, deleteProduct
}