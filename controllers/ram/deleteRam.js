const RamModel = require("../../models/Ram")

module.exports = async(req, res) => {
    try{
        const { id } = req.params
        if(!id) {
            return res.status(402).json({
                error: true,
                msg: "req.params.id is undefined"
            })
        }
        await RamModel.findByIdAndDelete(id).then((deletedRam) => {
            if(!deletedRam){
                return res.status(404).json({
                    error: true,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                msg: "This RAM is deleted"
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
            msg: "Internal Server Error"
        })
    }
}