const Course = require('../models/Course')
const Faculty = require('../models/Faculty')
module.exports = {
  findAllCourses,
  findCourse,
  createCourse,
  updateCourse,
  deleteCourse,
  unassignedCourses
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

async function unassignedCourses(req, res) {
  try {
    const allCourses = await Course.find({})
    const facultyCourses = await Faculty.find({}).populate('courses')
    const facultyCourseIds = facultyCourses.reduce((ids, faculty) => {
      return ids.concat(faculty.courses.map((course) => course._id))
    }, [])

    const coursesNotInFaculty = allCourses.filter(
      (course) => !facultyCourseIds.includes(course._id)
    )

    res.json(coursesNotInFaculty)
  } catch (error) {
    console.error('Error:', error)
    res.status(500).json({ errorMsg: error.message })
  }
}
