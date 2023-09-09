const studentrouter = require('express').Router()
const studentModel= require("../models/studentm")

studentrouter.post("/",async function(req,res){
    await studentModel.create(req.body);
    res.send("Enrolled Successfully")
})

studentrouter.get("/",async function(req,res){
    var studentdata= await studentModel.find()
    res.json(studentdata)
})

studentrouter.put("/",async function(req,res){
    await studentModel.findByIdAndUpdate(req.query.id,{$set:req.body});
    res.send("Updated Successfully")
})

studentrouter.delete("/",async function(req,res){
    await studentModel.findByIdAndDelete(req.query.id);
    res.send("Deleted Successfully")
})


module.exports = studentrouter