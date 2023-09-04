const ProcessorModel = require("../../models/Processor")

module.exports = async(req, res) => {
    try{
        const { name } = req.body
        if(!name) {
            return res.status(402).json({
                error: true,
                msg: "req.body.name is undefined"
            })
        }

        const itIsFound = await ProcessorModel.findOne({name}).then(foundProcessor => {
            if(!foundProcessor){
                return false
            }
            return true
        }).catch(err => {
            return false
        })

        if(itIsFound) {
            return res.status(409).json({
                error: true,
                msg: "This processor is already exist"
            })
        }

        await ProcessorModel.create({name}).then((processor) => {
            res.status(201).json({
                error: false,
                data: {processor}
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: true,
                msg: "Internal Server Error"
            })
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: true,
            msg: "Internal Server Error"
        })
    }
}