const router = require("express").Router()
const BrandModel = require("../models/Brand")
const viewAllCategories = require("../controllers/category/viewAllCategories")
const viewCategory = require("../controllers/category/viewCategory")
const createCategory = require("../controllers/category/createCategory")
const updateCategory = require("../controllers/category/updateCategory")
const deleteCategory = require("../controllers/category/deleteCategory")

router.get("/", viewAllCategories)

router.get("/:id", viewCategory)

router.post("/", createCategory)

router.put("/:id", updateCategory)

router.delete("/:id", deleteCategory)

module.exports = router