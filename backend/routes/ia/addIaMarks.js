const express = require('express');
const Mark = require('../../models/marks');
const StudentMark = require('../../models/studentMarks');
const Student = require('../../models/students');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        console.log("**************************");
        var question = new StudentMark(req.body);
            question.save().then(async()=>{
            var marks={}
            console.log(req.body);
                if(req.body.exam=='IA 1'){
                    console.log("S");
                    marks.IA1=req.body.totalObtainMark
                }
                if(req.body.exam=='IA 2'){
                    marks.IA2=req.body.totalObtainMark
                }
                if(req.body.exam=='IA 3'){
                    marks.IA3=req.body.totalObtainMark
                }
                if(req.body.exam=='External'){
                    marks.External=req.body.totalObtainMark
                }
                console.log(marks);
                marks.subjectName=req.body.subject;
            var body = {
                usn:'1hk18ec450',
                sem:req.body.sem,
                 marks:[marks
                ]
            }
            var query={
                usn:req.body.usn
            };
            console.log(query);
            var studentMarks =await StudentMark.updateOne(query,body);
            console.log(studentMarks.modifiedCount>=1);
            if(studentMarks.modifiedCount>=1){
                res.send({"data":"Marks Update Successfully","error":""});
            }else{
            var student= new StudentMark(body);
            student.save().then(()=>{
                res.send({"data":"Data Store"});
            })
            }
            
         });
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;