const mongoose = require("mongoose")
const Schema = mongoose.Schema

const submitionSchema = new Schema({
  courseWorkId: [
    {
      type: Schema.Types.ObjectId,
      ref: "CourseWork",
    },
  ],
  studentId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  grade: Number,
  answer: String,
})
module.exports = mongoose.model("Submition", submitionSchema)
