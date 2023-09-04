const { Schema, model } = require("mongoose")

const ramSchema = new Schema({
    size: {
        type: Number,
        required: true
    }
})

module.exports = model("RAM", ramSchema)