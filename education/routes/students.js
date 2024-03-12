const express = require('express')
const router = express.Router()

const studentsCtrl = require('../controllers/students')

router.get('/', studentsCtrl.findAllStudents)
router.get('/:id', studentsCtrl.findStudent)
router.post('/', studentsCtrl.createStudent)
router.put('/:id', studentsCtrl.updateStudent)
router.delete('/:id', studentsCtrl.deleteStudent)
module.exports = router
