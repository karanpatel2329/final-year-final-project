const express = require('express');
const Teacher = require('../../models/teacher');
const router = express.Router();
router.get('/',async(req,res)=>{
    console.log("JJS");
    try{
        var query={
        };
        var re = await Teacher.find(query)
        res.send(re);
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;