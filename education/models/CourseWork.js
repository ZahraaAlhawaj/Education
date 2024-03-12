const mongoose = require('mongoose')
const Schema = mongoose.Schema

const courseWorkSchema = new Schema(
  {
    courseId : [{
      type: Schema.Types.ObjectId,
      ref : 'Course'
    }],
    type : String,
    weight : Number ,
    question : String ,
    college : String ,
    submitions : [
      {
        type: Schema.Types.ObjectId,
        ref: 'Submition'
      }
    ]
  }
)
module.exports = mongoose.model('CourseWork', courseWorkSchema)