const BrandModel = require("../../models/Brand")

module.exports = async(req, res) => {
    try{
        await BrandModel.find().then(brands => {
            console.log(brands)
            if(brands === [] || !brands) {
                res.status(404).json({
                    error: true,
                    status: 404,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                status: 200,
                data: {brands}
            })
        }).catch(err => {
            res.status(404).json({
                error: true,
                status: 404,
                msg: "Not found"
            })
        })
    }catch(err){
        res.status(500).json({
            error: true,
            status: 500,
            msg: "Internal Server Error"
        })
    }
}