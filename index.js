const express = require("express")
const app = express()
const mongoose = require("mongoose")
const {MONGO_KEY} = require("./keys")

mongoose.connect(MONGO_KEY)
mongoose.connection.on("connected", (err) => {
    if(err) {
        console.log(err)
    }
    console.log("MongoOk")
})
mongoose.connection.on("error", (err) => {
    if(err) {
        console.log(err)
    }
    console.log("MongoOk")
})


app.use(express.json({extended: true}))

app.use("/product", require("./routes/product"))
app.use("/ram", require("./routes/ram"))
app.use("/processor", require("./routes/processor"))
app.use("/brand", require("./routes/brand"))
app.use("/category", require("./routes/category"))

app.listen(5000, () => {
    console.log("Server has been started on 5000 port")
})