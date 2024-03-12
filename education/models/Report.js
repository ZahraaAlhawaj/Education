const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reportSchema = new Schema(
  {
    totalScore: Number,
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    student: { type: Schema.Types.ObjectId, ref: 'Student' },
    submittions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Submittion'
      }
    ]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('report', reportSchema)
