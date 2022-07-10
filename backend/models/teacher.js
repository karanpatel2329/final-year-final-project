var mongoose=require('mongoose');
const Schema = require('mongoose').Schema;
const jwt = require("jsonwebtoken");
const config = require('config');   
var TeacherSchema =new mongoose.Schema({
    EmployeeId: {
        type: String,
        unique:true,
        required:true,
    },
    name: {
        type: String,
        required:true,
    },
    Dep: {
        type: String,
        required:true
    },
    gender: {
        type: String,
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
    role:{
        type:String,
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
TeacherSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id:this._id,EmployeeId:this.EmployeeId,dep:this.dep},config.get('jwtPrivateKey'));
    return token; 
}
const Teacher = mongoose.model('Teacher',TeacherSchema);


module.exports = Teacher;