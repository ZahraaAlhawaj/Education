const express = require("express")
const router = express.Router()
const submitionCtrl = require("../controllers/submitions")

router.get("/", submitionCtrl.findAllSubmitions)
router.get("/:id", submitionCtrl.findSubmition)
router.post("/", submitionCtrl.createSubmition)
router.put("/:id", submitionCtrl.updateSubmition)
module.exports = router
