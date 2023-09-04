const viewAllProcessors = require("../controllers/processor/viewAllProcessors");
const viewProcessor = require("../controllers/processor/viewProseccor");
const createProcessor = require("../controllers/processor/createProseccor");
const updateProcessor = require("../controllers/processor/updateProcessor");
const deleteProcessor = require("../controllers/processor/deleteProcessor");
const router = require("express").Router()

router.get("/", viewAllProcessors)

router.get("/:id", viewProcessor)

router.post("/", createProcessor)

router.put("/:id", updateProcessor)

router.delete("/:id", deleteProcessor)

module.exports = router