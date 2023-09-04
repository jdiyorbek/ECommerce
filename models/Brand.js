const { model, Schema } = require("mongoose")
const { ObjectId } = Schema.Types

const brandSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = model("Brand", brandSchema)