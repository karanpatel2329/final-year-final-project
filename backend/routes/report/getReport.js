const express = require('express');
const marks = require('../../models/marks');
const studentMarks = require('../../models/studentMarks');
const Subject = require('../../models/subject');
const router = express.Router();
router.get('/',async(req,res)=>{
    console.log("JJS");
    try{
        var query={
        }; 
        var re = await studentMarks.find(query)
        res.send(re);
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;