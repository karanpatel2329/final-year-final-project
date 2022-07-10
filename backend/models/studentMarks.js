const mongoose = require('mongoose')
let Schema = mongoose.Schema

const studentMarkSchema = new Schema(
    {
        usn:String,
        sem:Number,
         marks:[
            {
               subjectName:{type:String,default:0},
               IA1:{type:Number,default:0},
               IA2:{type:Number,default:0},
               IA3:{type:Number,default:0},
               External:{type:Number,default:0},
               IA1Report:{type:String,default:''},
               IA2Report:{type:String,default:''},
               IA3Report:{type:String,default:''},
            }
        ]
    }
)

module.exports = mongoose.model('StudentMark', studentMarkSchema)