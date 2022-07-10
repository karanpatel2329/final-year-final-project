const express = require('express');
const Question = require('../../models/question');
const router = express.Router();
router.post('/',(req,res)=>{
    try{
        var question = new Question(req.body);
            question.save().then(()=>{
            return res.send({"data":question,"error":""});
         });
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;