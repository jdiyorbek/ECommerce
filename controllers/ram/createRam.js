const RamModel = require("../../models/Ram")

module.exports = async(req, res) => {
    try{
        const { size } = req.body
        if(!size) {
            return res.status(402).json({
                error: true,
                status: 402,
                msg: "req.body.size is undefined"
            })
        }

        const itIsFound = await RamModel.findOne({size}).then(foundRam => {
            if(!foundRam){
                return false
            }
            return true
        }).catch(err => {
            return false
        })

        if(itIsFound) {
            return res.status(409).json({
                error: true,
                msg: "This ram size is already exist"
            })
        }

        await RamModel.create({size}).then((ram) => {
            res.status(201).json({
                error: false,
                status: 201,
                data: {ram}
            })
        }).catch(err => {
            res.status(500).json({
                error: true,
                status: 500,
                msg: "Internal Server Error"
            })
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: true,
            status: 500,
            msg: "Internal Server Error"
        })
    }
}