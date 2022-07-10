const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Student= require("../models/students");
router.post('/',async(req,res)=>{
    try{
     let stud = await Student.findOne({USN:req.body.USN});
     if(stud){
         return res.status(400).send({
             'data':'',
             'error':'Student Usn is already registered'
         });
     }
     student = new Student(req.body);
     const salt = await bcrypt.genSalt(10);
     student.password=await bcrypt.hash(student.password,salt);
     await student.save(); 
     return res.send({'data':student});
     
    }catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
});

module.exports =router;