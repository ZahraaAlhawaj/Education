const express = require('express')
const router = express.Router()

const reportsCtrl = require('../controllers/reports')

router.get('/', reportsCtrl.findAllReports)
router.get('/:id', reportsCtrl.findReport)
router.post('/', reportsCtrl.createReport)
router.put('/:id', reportsCtrl.updateReport)
module.exports = router
