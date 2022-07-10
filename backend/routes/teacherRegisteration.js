const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Teacher = require('../models/teacher');
router.post('/',async(req,res)=>{
    try{
     let teach = await Teacher.findOne({EmployeeId:req.body.EmployeeId});
     if(teach){
         return res.status(200).send({
             'data':'',
             'error':'EmployeeId is already registered'
         });
     }
     teacher = new Teacher(req.body);
     const salt = await bcrypt.genSalt(10);
     teacher.password=await bcrypt.hash(teacher.password,salt);
     await teacher.save(); 
     return res.send({'data':teacher});
     
    }catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
});

module.exports =router;