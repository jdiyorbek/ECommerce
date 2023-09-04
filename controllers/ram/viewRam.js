const RamModel = require("../../models/Ram")

module.exports = async (req, res) => {
    try{
        const { id } = req.params
        await RamModel.findById(id).then(ram => {
            if(!ram) {
                res.status(404).json({
                    error: true,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                data: {ram}
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