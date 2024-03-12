const express = require("express")
const router = express.Router()
const courseWorkCtrl = require("../controllers/courseWorks")

router.get("/", courseWorkCtrl.findAllCourseWorks)
router.get("/:id", courseWorkCtrl.findCourseWork)
router.post("/", courseWorkCtrl.createCourseWork)
router.put("/:id", courseWorkCtrl.updateCourseWork)
router.delete("/:id", courseWorkCtrl.deleteCourseWork)
module.exports = router
