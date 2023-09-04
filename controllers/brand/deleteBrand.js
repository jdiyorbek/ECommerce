const BrandModel = require("../../models/Brand");

module.exports = (req, res) => {
    try{
        const { id } = req.params
        if(!id) {
            return res.status(402).json({
                error: true,
                status: 402,
                msg: "req.params.id is undefined"
            })
        }
        BrandModel.findByIdAndDelete(id).then((deletedBrand) => {
            if(!deletedBrand){
                return res.status(404).json({
                    error: true,
                    status: 404,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                status: 200,
                msg: "This brand is deleted"
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