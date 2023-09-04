const ProcessorModel = require("../../models/Processor")

module.exports = async (req, res) => {
    try{
        const { name} = req.body
        const { id } = req.params
        if(!name) {
            return res.status(402).json({
                error: true,
                msg: "req.body.name is undefined"
            })
        }
        if(!id) {
            return res.status(402).json({
                error: true,
                msg: "req.params.id is undefined"
            })
        }
        ProcessorModel.findByIdAndUpdate(id, {name}).then(() => {
            res.status(200).json({
                error: false,
                msg: "The Processor is updated"
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