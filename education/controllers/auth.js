const Admin = require('../models/Admin')
const Student = require('../models/Student')
const Faculty = require('../models/Faculty')

const LoginUser = async (req, res) => {
  try {
    const { email, password, userType } = req.body
    let user
    if (userType === 'admin') {
      user = await Admin.findOne({ email })
    }
    if (userType === 'student') {
      user = await Student.findOne({ email })
    }
    if (userType === 'faculty') {
      user = await Faculty.findOne({ email })
    }
    let payload
    if (user.password == password) {
      payload = { id: user._id, email: user.email, userType: userType }
    }
    res.send({ user: payload })
  } catch (error) {
    console.log(error)
    res.status(401).send({
      status: 'Error',
      msg: 'The provided credentials do not match a record in the system !'
    })
  }
}
module.exports = {
  LoginUser
}
