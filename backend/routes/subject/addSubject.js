const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        var query={
            code:req.body.code
        }; 
        var re = await Subject.findOne(query)
        code =req.body.code;
        if(!re){
            console.log(req.body.name);
            var module1 = req.body.module1.split(",")
            var module2 = req.body.module2.split(",")
            var module3 = req.body.module3.split(",")
            var module4 = req.body.module4.split(",")
            var module5 = req.body.module5.split(",")
            var subjectBody={
                name: req.body.name,
                code: req.body.code,
                shortName: req.body.shortName,
                assignTeacher: req.body.assignTeacher,
                module1: module1,
                module2: module2,
                module3: module3,
                module4: module4,
                module5: module5 
              }
            var subject = new Subject(subjectBody);
            subject.save().then(()=>{
            return res.send({"data":subject,"error":""});
         });
        }else{
            Subject.updateOne({_id:re._id},{$set:{"name":req.body.name,"shortName":req.body.shortName}},{upsert:true}).then(e=> res.send({"data":subject,"error":""})).catch(e=>console.log(e));
            
        }
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;