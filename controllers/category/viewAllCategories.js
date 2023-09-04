const CategoryModel = require("../../models/Category")

module.exports = (req, res) => {
    try{
        const { id } = req.params
        CategoryModel.find()
            .then(categories => {
                if(!categories) {
                    res.status(404).json({
                        error: true,
                        status: 404,
                        msg: "Not found"
                    })
                }
                res.status(200).json({
                    error: false,
                    status: 200,
                    data: {categories}
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