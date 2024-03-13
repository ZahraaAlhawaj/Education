const Faculty = require('../models/Faculty')

module.exports = {
  findAllFaculities,
  findFaculty,
  createFaculty,
  updateFaculty,
  deleteFaculty
}

async function findAllFaculities(req, res) {
  const faculty = await Faculty.find({})
  res.send(faculty)
}

async function findFaculty(req, res) {
  const faculty = await Faculty.findById(req.params.id).populate('courses')
  res.send(faculty)
}

async function createFaculty(req, res) {
  await Faculty.create(req.body)
  res.send('Faculty Created')
}

async function updateFaculty(req, res) {
  try {
    await Faculty.findByIdAndUpdate(req.params.id, { ...req.body })
    res.send('faculty Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
async function deleteFaculty(req, res) {
  try {
    await Faculty.findByIdAndDelete(req.params.id)
    res.send('Faculty Deleted')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
