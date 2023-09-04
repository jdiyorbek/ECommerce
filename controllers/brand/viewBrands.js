const BrandModel = require("../../models/Brand")

module.exports = (req, res) => {
    try{
        const { id } = req.params
        BrandModel.findById(id).then(brand => {
            if(!brand) {
                res.status(404).json({
                    error: true,
                    status: 404,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                status: 200,
                data: {brand}
            })
        }).catch(err => {
            res.status(404).json({
                error: true,
                status: 200,
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