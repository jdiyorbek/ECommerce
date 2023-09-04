const ProcessorModel = require("../../models/Processor")

module.exports = async (req, res) => {
    try{
        const { id } = req.params
        await ProcessorModel.findById(id).then(processor => {
            if(!processor) {
                res.status(404).json({
                    error: true,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                data: {processor}
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