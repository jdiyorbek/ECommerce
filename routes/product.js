const router = require("express").Router()
const ProductModel = require("../models/Product")

router.post("/", (req, res ) => {
    const { name, details } = req.body
    ProductModel.create({
        name,
        details
    })
})

module.exports = router