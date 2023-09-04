const BrandModel = require("../../models/Brand")

module.exports = async(req, res) => {
    try{
        const { name } = req.body
        if(!name) {
            return res.status(402).json({
                error: true,
                msg: "req.body.name is undefined"
            })
        }

        const itIsFound = await BrandModel.findOne({name}).then(foundBrand => {
            if(!foundBrand){
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

        await BrandModel.create({name}).then((brand) => {
            res.status(201).json({
                error: false,
                status: 201,
                data: brand
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