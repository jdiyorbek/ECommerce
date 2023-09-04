const BrandModel = require("../../models/Brand");

module.exports = (req, res) => {
    try{
        const { name } = req.body
        const { id } = req.params
        if(!name) {
            return res.status(402).json({
                error: true,
                status: 402,
                msg: "req.body.name is undefined"
            })
        }
        if(!id) {
            return res.status(402).json({
                error: true,
                status: 402,
                msg: "req.params.id is undefined"
            })
        }
        BrandModel.findByIdAndUpdate(id, {name}).then(() => {
            res.status(200).json({
                error: false,
                status: 200,
                msg: "Brand is updated"
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