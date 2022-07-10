const mongoose = require('mongoose')
let Schema = mongoose.Schema

const questionPaperSchema = new Schema(
    {
        examId: mongoose.Types.ObjectId,
        subjectCode: String,
        subjectShortName: String,
        subjectFullName: String,
        questionsCount: Number,
        modulesIncluded: [Number],
        questions: [],
        marksForEach: Number,
        toAnswer: Number,
    }
)

module.exports = mongoose.model('QuestionPaper', questionPaperSchema)