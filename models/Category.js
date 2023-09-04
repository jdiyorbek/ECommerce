const { model, Schema } = require("mongoose")
const { ObjectId } = Schema.Types

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = model("Category", categorySchema)