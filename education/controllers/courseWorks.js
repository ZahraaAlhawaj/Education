const CourseWork = require("../models/CourseWork")

module.exports = {
  findAllCourseWorks,
  findCourseWork,
  createCourseWork,
  updateCourseWork,
  deleteCourseWork,
}

async function findAllCourseWorks(req, res) {
  const courseWork = await CourseWork.find({})
  res.send(courseWork)
}

async function findCourseWork(req, res) {
  const courseWork = await CourseWork.findById(req.params.id).populate("courseId").populate("submitions")
  res.send(courseWork)
}

async function createCourseWork(req, res) {
  try {
    const newCourseWork = await CourseWork.create(req.body)

    res.send("Course Work Created", newCourseWork)
  } catch (error) {
    console.log("Error :", error)
    res.status(500).send({ errorMsg: error.message })
  }
}

async function updateCourseWork(req, res) {
  try {
    await CourseWork.findByIdAndUpdate(req.params.id, { ...req.body })
    res.send("course Work Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
async function deleteCourseWork(req, res) {
  try {
    await CourseWork.findByIdAndDelete(req.params.id)
    res.send("course work Deleted")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
