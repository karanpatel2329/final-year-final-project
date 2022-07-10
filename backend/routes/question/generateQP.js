const express = require('express');
const Question = require('../../models/question');
const router = express.Router();
router.get('/',async(req,res)=>{
    console.log("JJS");
    try{
        console.log(req.query.IA);
        paper=[];
        if(req.query.IA==1){
            var query={
            }; 
            query.$expr=  { $gt: [0.5, {$rand: {} } ] };
            var re = await Question.find(query).where({'moduleNumber':'1'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'2'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'1'}).limit(1)
            paper.push(re[0]);
            
            var re = await Question.find().where({'moduleNumber':'2'}).limit(1)
            paper.push(re[0]);
            res.send(paper);
        }
        if(req.query.IA==2){
            var query={
            }; 
            query.$expr=  { $gt: [0.5, {$rand: {} } ] };
            var re = await Question.find(query).where({'moduleNumber':'3'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'4'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'3'}).limit(1)
            paper.push(re[0]);
            
            var re = await Question.find().where({'moduleNumber':'4'}).limit(1)
            paper.push(re[0]);
            res.send(paper);
        }
        if(req.query.IA==3){
            var query={
            }; 
            query.$expr=  { $gt: [0.5, {$rand: {} } ] };
            var re = await Question.find(query).where({'moduleNumber':'5'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'1'}).limit(2)
            for(var i in re){
                paper.push(re[i]);
            }
            var re = await Question.find().where({'moduleNumber':'5'}).limit(1)
            paper.push(re[0]);
            
            var re = await Question.find().where({'moduleNumber':'1'}).limit(1)
            paper.push(re[0]);
            res.send(paper);
        }
       // console.log(re);
    }
    catch(e){
        console.log(e);
        return res.send({"data":"","error":"e"});
    }
});
module.exports =router;