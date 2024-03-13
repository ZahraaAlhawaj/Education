const Report = require('../models/Report')
module.exports = {
  findAllReports,
  findReport,
  createReport,
  updateReport
}

//find all Comment
async function findAllReports(req, res) {
  const report = await Report.find({}) .populate('course')
  .populate('student')
  .populate('submittions')
  res.send(report)
}

//find specific Comment
async function findReport(req, res) {
  const report = await Report.findById(req.params.id)
    .populate('course')
    .populate('student')
    .populate('submittions')
  res.send(report)
}
//create Comment
async function createReport(req, res) {
  try {
    const newReport = await Report.create(req.body)

    res.send('Report Created')
  } catch (error) {
    console.log('Error creating report:', error)
    res.status(500).send({ errorMsg: error.message })
  }
}

//update Comment
async function updateReport(req, res) {
  try {
    await Report.findByIdAndUpdate(req.params.id, req.body)
    res.send('Report Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
