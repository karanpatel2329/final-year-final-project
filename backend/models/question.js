const mongoose = require('mongoose')
let Schema = mongoose.Schema

const questionSchema = new Schema(
    {
        type: String, // 'Objective' || 'Subjective'
        subjectCode: String, // Subject Code
        questionText: String, // Question Text
        marks: Number, // Marks
        moduleNumber: Number, // Module
        topic: String, // Topic
        rbtLevel: Number, // RBT Level
        coNumber: // Array of numbers
            [
                Number
            ],
        hasImage: Boolean, // true || false
        image: String, // '' (initially empty)
        options: // Array of Options (max = 4), null if 'Subjective'
            [
                String || Number
            ],
        answerScheme: Object || String || Number // Answer Scheme if 'Subjective', Option number if 'Objective'
    }
)

module.exports = mongoose.model('Question', questionSchema)