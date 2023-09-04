const RamModel = require("../../models/Ram")

module.exports = async (req, res) => {
    try{
        const { size } = req.body
        const { id } = req.params
        if(!size) {
            return res.status(402).json({
                error: true,
                msg: "req.body.size is undefined"
            })
        }
        if(!id) {
            return res.status(402).json({
                error: true,
                msg: "req.params.id is undefined"
            })
        }
        RamModel.findByIdAndUpdate(id, {size}).then(() => {
            res.status(200).json({
                error: false,
                msg: "The RAM is updated"
            })
        }).catch(err => {
            res.status(404).json({
                error: true,
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