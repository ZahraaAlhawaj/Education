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
    plan: { type: Schema.Types.ObjectId, ref: 'plan' },
    reports: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Report'
      }
    ],
    GPA: String
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Student', studentSchema)