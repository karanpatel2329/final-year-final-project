const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.post('/',async(req,res)=>{
    try{
        console.log(req.body);
        let sub = await Subject.findOne({_id:req.body._id});
        if(!sub){
            return res.status(200).send({
             'data':'',
             'error':'Question is not found in DB. It may already get deleted'
            });
        }
       
        Subject.deleteOne({"_id":req.body._id},function(err, result) {
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