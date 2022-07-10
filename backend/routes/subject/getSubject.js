const express = require('express');
const Subject = require('../../models/subject');
const router = express.Router();
router.get('/',async(req,res)=>{
    console.log("JJS");
    try{
        var query={
        }; 
        var re = await Subject.find(query)
        res.send(re);
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;