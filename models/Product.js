const { Schema, model } = require("mongoose")

const productSchema = new Schema({
    name: String,
    details: {
        type: Object
    }
})

module.exports = model("Product", productSchema)