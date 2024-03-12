const express = require("express")
const router = express.Router()
const adminCtrl = require("../controllers/admins")

router.get("/", adminCtrl.findAdmin)

router.post("/", adminCtrl.createAdmin)

module.exports = router
