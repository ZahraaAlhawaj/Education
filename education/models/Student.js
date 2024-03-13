const mongoose = require('mongoose')
const Schema = mongoose.Schema

const studentSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course'
      }
    ],
    plan: { type: Schema.Types.ObjectId, ref: 'Plan' },
    reports: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Report'
      }
    ],
    GPA: Number
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Student', studentSchema)
