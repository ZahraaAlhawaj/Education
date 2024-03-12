const Admin = require("../models/Admin")

module.exports = {
  findAdmin,
  createAdmin,
}

async function findAdmin(req, res) {
  const admin = await Admin.find({})
  res.send(admin)
}

async function createAdmin(req, res) {
  try {
    const newAdmin = await Admin.create(req.body)
    res.send("Admin Created", newAdmin)
  } catch (error) {
    console.log("Error :", error)
    res.status(500).send({ errorMsg: error.message })
  }
}
