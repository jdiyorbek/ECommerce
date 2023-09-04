const router = require("express").Router()
const BrandModel = require("../models/Brand")
const viewAllBrands = require("../controllers/brand/viewAllBrands")
const viewBrands = require("../controllers/brand/viewBrands")
const createBrand = require("../controllers/brand/createBrand")
const updateBrand = require("../controllers/brand/updateBrand")
const deleteBrand = require("../controllers/brand/deleteBrand")

router.get("/", viewAllBrands)

router.get("/:id", viewBrands)

router.post("/", createBrand)

router.put("/:id", updateBrand)

router.delete("/:id", deleteBrand)

module.exports = router