const express = require('express');
const Question = require('../../models/question');
const router = express.Router();
router.get('/',async(req,res)=>{
    console.log("JJS");
    try{
        console.log();
        var query={
        }; 
        if(req.query.moduleNumber!=undefined){
            query.moduleNumber=req.query.moduleNumber;
        }
        if(req.query.marks!=undefined){
            query.marks=req.query.marks;
        }
        if(req.query.subjectCode!=undefined){
            query.subjectCode=req.query.subjectCode;
        }
        var re = await Question.find(query)
        res.send(re);
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;