const Student = require('../models/Student')
module.exports = {
  findAllStudents,
  findStudent,
  createStudent,
  updateStudent,
  deleteStudent
}

//find all Comment
async function findAllStudents(req, res) {
  const student = await Student.find({})
  res.send(student)
}

//find specific Comment
async function findStudent(req, res) {
  const student = await Student.findById(req.params.id)
    .populate('courses')
    .populate('plan')
    .populate('reports')
  res.send(student)
}
//create Comment
async function createStudent(req, res) {
  try {
    const newStudent = await Student.create(req.body)

    res.send('Student Created')
  } catch (error) {
    console.log('Error creating report:', error)
    res.status(500).send({ errorMsg: error.message })
  }
}

//update Comment
async function updateStudent(req, res) {
  try {
    await Student.findByIdAndUpdate(req.params.id, req.body)
    res.send('Student Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}

//delete Comment
async function deleteStudent(req, res) {
  try {
    await Student.findByIdAndDelete(req.params.id)
    res.send('Student Deleted')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
