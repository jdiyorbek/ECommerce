const CategoryModel = require("../../models/Category")

module.exports = (req, res) => {
    try{
        const { id } = req.params
        if(!id) {
            return res.status(402).json({
                error: true,
                msg: "req.params.id is undefined"
            })
        }
        CategoryModel.findByIdAndDelete(id).then((deletedCategory) => {
            if(!deletedCategory){
                return res.status(404).json({
                    error: true,
                    msg: "Not found"
                })
            }
            res.status(200).json({
                error: false,
                msg: "This category is deleted"
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