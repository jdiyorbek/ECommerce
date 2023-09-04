const RamModel = require("../../models/Ram")

module.exports = async(req, res) => {
    try{
        await RamModel.find()
            .then(rams => {
                if(!rams) {
                    res.status(404).json({
                        error: true,
                        status: 404,
                        msg: "Not found"
                    })
                }
                res.status(200).json({
                    error: false,
                    status: 200,
                    data: {rams}
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