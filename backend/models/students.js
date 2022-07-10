var mongoose=require('mongoose');
const Schema = require('mongoose').Schema;
const jwt = require("jsonwebtoken");
const config = require('config');   
var StudentSchema =new mongoose.Schema({
    USN: {
        type: String,
        unique:true,
        required:true,
    },
    name: {
        type: String,
        required:true,
    },
    branch: {
        type: String,
        required:true
    },
    sem: {
        type: Number,
        required:true
    },
    subject:[{
        type: String
    }],
    dob:{
        type:String,
        required:true
    },
    attendence:{
        type: Schema.Types.ObjectId,
        ref: 'Attendance'
    },
    contactInfo:{
        address:{
            type:String,
            required:true
        },
        mobileNo:{
            type:Number,
            length:10,
            required:true
        },
        parentMobileNo:{
            type:Number,
            length:10
        }
    },
    password:{
        type:String,
        required:true
    }
});
StudentSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,USN:this.USN,branch:this.branch},config.get('jwtPrivateKey'));
    return token; 
}
const Student = mongoose.model('Student',StudentSchema);


module.exports = Student;