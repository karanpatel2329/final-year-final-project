const express = require('express');
const Question = require('../../models/question');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        let ques = await Question.findOne({questionText:req.body.questionText});
        if(!ques){
            return res.status(400).send({
             'data':'',
             'error':'Question is not found in DB. It may already get deleted'
            });
        }
       
        Question.deleteOne({"questionText":req.body.questionText},function(err, result) {
            if (err) throw err;
            console.log("1 document Deleted");
            res.status(200).send({"data":"Question Deleted","error":""});
          })
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;