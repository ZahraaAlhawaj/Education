const mongoose = require('mongoose')
const Schema = mongoose.Schema

const planSchema = new Schema(
  {
    type: String,
    major: String,
    department: String,
    collage: String,
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Course'
      }
    ],
    student: [
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

module.exports = mongoose.model('Plan', planSchema)
