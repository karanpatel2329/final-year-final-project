const mongoose = require('mongoose')
let Schema = mongoose.Schema

const subjectSchema = new Schema(
    {
        name: {
            type:String,
            required:true
        }, 
        code: {
            type:String,
            required:true
        }, 
        shortName: {
            type:String,
            required:true
        }, 
        assignTeacher: [{ type: Schema.Types.ObjectId, ref: 'teachers' }],
        module1:[{
            type:String
        }],
        module2:[{
            type:String
        }],
        module3:[{
            type:String
        }],
        module4:[{
            type:String
        }],
        module5:[{
            type:String
        }],
 
    }
)

module.exports = mongoose.model('Subject', subjectSchema)