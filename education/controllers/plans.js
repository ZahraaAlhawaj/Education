const Plan = require('../models/Plan')
module.exports = {
  findAllPlans,
  findPlan,
  createPlan,
  updateplan,
  deletePlan
}

//find all Comment
async function findAllPlans(req, res) {
  const plan = await Plan.find({})
  res.send(plan)
}

//find specific Comment
async function findPlan(req, res) {
  const plan = await Plan.findById(req.params.id)
    .populate('courses')
    .populate('students')
  res.send(plan)
}
//create Comment
async function createPlan(req, res) {
  try {
    const newPlan = await Plan.create(req.body)

    res.send('Plan Created')
  } catch (error) {
    console.log('Error creating plan:', error)
    res.status(500).send({ errorMsg: error.message })
  }
}

//update Comment
async function updateplan(req, res) {
  try {
    await Plan.findByIdAndUpdate(req.params.id, req.body)
    res.send('Plan Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}

//delete Comment
async function deletePlan(req, res) {
  try {
    await Plan.findByIdAndDelete(req.params.id)
    res.send('Plan Deleted')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
