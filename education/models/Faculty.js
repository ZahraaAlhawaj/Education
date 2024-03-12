const mongoose = require('mongoose')
const Schema = mongoose.Schema

const facultySchema = new Schema(
  {
    name : String,
    email : String,
    password : String ,
    phoneNumber : Number ,
    courses : [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course'
      }
    ]
  }
)
module.exports = mongoose.model('Faculty', facultySchema)