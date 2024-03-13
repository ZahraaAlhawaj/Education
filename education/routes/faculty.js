const express = require('express')
const router = express.Router()
const facultyCtrl = require('../controllers/faculties')

router.get('/', facultyCtrl.findAllFaculities)
router.post('/addCourseToFaculty/:id', facultyCtrl.addCourseToFaculty)
router.get('/:id', facultyCtrl.findFaculty)
router.post('/', facultyCtrl.createFaculty)
router.put('/:id', facultyCtrl.updateFaculty)
router.delete('/:id', facultyCtrl.deleteFaculty)
module.exports = router
