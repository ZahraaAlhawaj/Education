const Submition = require("../models/Submition")

module.exports = {
  findAllSubmitions,
  findSubmition,
  createSubmition,
  updateSubmition,
}

async function findAllSubmitions(req, res) {
  const submition = await Submition.find({})
  res.send(submition)
}

async function findSubmition(req, res) {
  const submition = await Submition.findById(req.params.id)
    .populate("courseWorkId")
    .populate("studentId")
  res.send(submition)
}

async function createSubmition(req, res) {
  await Submition.create(req.body)
  res.send("submition Created")
}

async function updateSubmition(req, res) {
  try {
    await Submition.findByIdAndUpdate(req.params.id, { ...req.body })
    res.send("submition Updated")
  } catch (error) {
    console.log("This is the error : " + err)
    res.send({ errorMsg: err.message })
  }
}
