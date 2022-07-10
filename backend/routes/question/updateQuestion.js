const express = require('express');
const Question = require('../../models/question');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        let ques = await Question.findOne({questionText:req.body.oldQuestionText});
        if(!ques){
            return res.status(400).send({
             'data':'',
             'error':'Question is not found in DB. It may already get deleted'
            });
        }
        var updateValue = {
            $set:{
                "type":req.body.type,
                "subjectCode":req.body.subjectCode,
                "questionText":req.body.questionText,
                "marks":req.body.marks,
                "moduleNumber":req.body.moduleNumber,
                "topic":req.body.topic,
                "rbtlevel":req.body.rbtlevel,
                "coNumber":req.body.coNumber,
                "hasImage":req.body.hasImage,
                "image":req.body.image,
                "option":req.body.option,
                "answerScheme":req.body.answerScheme
            }
        }
        Question.updateOne({"questionText":req.body.oldQuestionText},updateValue,function(err, result) {
            if (err) throw err;
            console.log("1 document updated");
            res.status(200).send({"data":"Update Question","error":""});
          })
    }
    catch(e){
        return res.send({"data":"","error":"Some Error Occured"});
    }
});
module.exports =router;