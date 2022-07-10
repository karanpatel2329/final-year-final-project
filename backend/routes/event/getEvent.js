const express = require('express');
const router = express.Router();
const bcrypt = require("bcrypt");
const Event = require('../../models/event');
router.post('/',async(req,res)=>{
    try{
        var query={
        };
        var re = await Event.find(query)
        res.send(re);
        console.log(re);
    }catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
});

module.exports =router;