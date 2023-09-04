const CategoryModel = require("../../models/Category")

module.exports = async(req, res) => {
    try{
        const { name } = req.body
        if(!name) {
            return res.status(402).json({
                error: true,
                status: 402,
                msg: "req.body.name is undefined"
            })
        }

        const itIsFound = await CategoryModel.findOne({name}).then(foundCategory => {
            if(!foundCategory){
                return false
            }
            return true
        }).catch(err => {
            return false
        })

        if(itIsFound) {
            return res.status(409).json({
                error: true,
                msg: "This name is already exist"
            })
        }

        await CategoryModel.create({name}).then((category) => {
            res.status(201).json({
                error: false,
                status: 201,
                data: category
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                status: 500,
                msg: "Internal Server Error"
            })
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: true,
            status: 500,
            msg: "Internal Server Error"
        })
    }
}