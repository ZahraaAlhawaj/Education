const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseSchema = new Schema(
  {
    name: String,
    code: String,
    credit: Number,
    timing: String,
    days: String,
    room: String,
    building: String,
    preRequisite: String,
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Student'
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Course', courseSchema)
