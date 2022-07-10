const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.post('/',async(req,res)=>{
    console.log("JJS");
    try{
        console.log(req.body);
        var query={
            _id:req.body._id
        }; 
        var re = await Subject.find(query)
        res.send(re);
       
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;