const teacherouter= require('express').Router()
const Teachermodel= require("../models/Teacherm")

teacherouter.post('/',async function (req, res){
    await Teachermodel.create(req.body);
    res.send ("Teacher selected")

})

teacherouter.get('/',async function (req, res){
   var Teacherdata= await Teachermodel.find();
    res.json(Teacherdata)

})
teacherouter.put('/',async function (req, res){
    await Teachermodel.findByIdAndUpdate(req.query.id,{$set:req.body});
    res.send("Data updated succesfully");

})
teacherouter.delete('/',async function (req, res){
    await Teachermodel.findByIdAndDelete(req.query.id);

    res.send ("Deleted succesfuully")

})
module.exports=teacherouter
