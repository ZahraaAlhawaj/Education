const express = require("express")
const router = express.Router()
const facultyCtrl = require("../controllers/faculties")

router.get("/", facultyCtrl.findAllFaculities)
router.get("/:id", facultyCtrl.findFaculty)
router.post("/", facultyCtrl.createFaculty)
router.put("/:id", facultyCtrl.updateFaculty)
router.delete("/:id", facultyCtrl.deleteFaculty)
module.exports = router
