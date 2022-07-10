const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const config = require("config");
const Teacher = require('../models/teacher');
router.post('/',async(req,res)=>{
    try{
     let teach = await Teacher.findOne({EmployeeId:req.body.EmployeeId});
     if(!teach){
         return res.send({
             'data':'',
             'error':'Employee Id is not found.'
         });
     }
    validatePassword = await bcrypt.compare(req.body.password,teach.password);
     if(!validatePassword){
        return res.send({
            'data':'',
            'error':'Wrong Password'
        });
     }else{
         
        token = teach.generateAuthToken();
        return res.send({
            'data':'Login Successfull',
            'token':token
        });
     }
     
    }catch(e){
        console.log(e);
       return res.status(500).send(e);
    }
});

module.exports =router;