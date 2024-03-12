const express = require('express')
const router = express.Router()

const plansCtrl = require('../controllers/plans')

router.get('/', plansCtrl.findAllPlans)
router.get('/:id', plansCtrl.findPlan)
router.post('/', plansCtrl.createPlan)
router.put('/:id', plansCtrl.updateplan)
router.delete('/:id', plansCtrl.deletePlan)
module.exports = router
