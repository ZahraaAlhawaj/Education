const express = require('express')
const router = express.Router()

const coursesCtrl = require('../controllers/courses')

router.get('/', coursesCtrl.findAllCourses)
router.get('/unassignedCourses', coursesCtrl.unassignedCourses)
router.get('/:id', coursesCtrl.findCourse)
router.post('/', coursesCtrl.createCourse)
router.put('/:id', coursesCtrl.updateCourse)
router.delete('/:id', coursesCtrl.deleteCourse)
module.exports = router
