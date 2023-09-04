const viewAllRams = require("../controllers/ram/viewAllRams");
const viewRam = require("../controllers/ram/viewRam");
const createRam = require("../controllers/ram/createRam");
const updateRam = require("../controllers/ram/updateRam");
const deleteRam = require("../controllers/ram/deleteRam");
const router = require("express").Router()

router.get("/", viewAllRams)

router.get("/:id", viewRam)

router.post("/", createRam)

router.put("/:id", updateRam)

router.delete("/:id", deleteRam)

module.exports = router