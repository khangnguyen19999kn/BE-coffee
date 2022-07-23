const express = require ('express');
const defaultRouter = express.Router();

const defaultPage = async (req, res) => {
    try {
        res.status(201).send("Trang chu....");
    } catch (error) {
        res.status(500).send(error);
    }
}

defaultRouter.get("/", defaultPage)

module.exports={
    defaultRouter,
}
