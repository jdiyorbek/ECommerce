const ProceccorModel = require("../../models/Processor")

module.exports = async(req, res) => {
    try{
        await ProceccorModel.find()
            .then(processors => {
                if(!processors) {
                    res.status(404).json({
                        error: true,
                        msg: "Not found"
                    })
                }
                res.status(200).json({
                    error: false,
                    data: {processors}
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