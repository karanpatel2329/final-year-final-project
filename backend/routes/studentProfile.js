const express = require('express');
const auth = require('../middlewares/auth');
const Student = require('../models/students');
const router = express.Router();
router.post('/',auth,async(req,res)=>{
    try{
        var query={
            USN:req.body.USN
        };
        var re = await Student.find(query)
        res.send(re);
        console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});

module.exports =router;