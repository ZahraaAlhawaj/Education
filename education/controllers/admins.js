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
  await Admin.create(req.body)
  res.send("Admin Created")
}
