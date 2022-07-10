const express = require('express');
const bcrypt = require("bcrypt");
const Student = require('../../models/students');
const router = express.Router();
router.post('/',async(req,res)=>{
    console.log("JJS");
    try{
        var query={
            USN:req.body.USN
        };
        const salt = await bcrypt.genSalt(10);
        req.body.password=await bcrypt.hash(req.body.password,salt);
        var re = await Student.updateOne(query,req.body);
        res.send({"data":"Updated Successfully"});
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;