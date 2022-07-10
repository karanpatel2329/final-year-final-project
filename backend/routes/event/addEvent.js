const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Event = require('../../models/event');
router.post('/',async(req,res)=>{
    try{
     events = new Event(req.body);
     await events.save(); 
     return res.send({'data':events});
     
    }catch(e){
        console.log(e);
        return res.send({'error':"Some Eroor"});
    }
});

module.exports =router;