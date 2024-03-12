const Course = require('../models/Course')
module.exports = {
  findAllCourses,
  findCourse,
  createCourse,
  updateCourse,
  deleteCourse
}

//find all Comment
async function findAllCourses(req, res) {
  const course = await Course.find({})
  res.send(course)
}

//find specific Comment
async function findCourse(req, res) {
  const course = await Course.findById(req.params.id).populate('students')
  res.send(course)
}
//create Comment
async function createCourse(req, res) {
  try {
    const newCourse = await Course.create(req.body)

    res.send('Course Created')
  } catch (error) {
    console.log('Error creating course:', error)
    res.status(500).send({ errorMsg: error.message })
  }
}

//update Comment
async function updateCourse(req, res) {
  try {
    await Course.findByIdAndUpdate(req.params.id, req.body)
    res.send('Course Updated')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}

//delete Comment
async function deleteCourse(req, res) {
  try {
    await Course.findByIdAndDelete(req.params.id)
    res.send('course Deleted')
  } catch (error) {
    console.log('This is the error : ' + err)
    res.send({ errorMsg: err.message })
  }
}
