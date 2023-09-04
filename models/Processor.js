const { Schema, model } = require("mongoose")

const processorSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = model("Processor", processorSchema)