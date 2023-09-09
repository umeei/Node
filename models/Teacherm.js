const mongoose = require (`mongoose`)

var teacherdata=mongoose.model('teachers', new mongoose.Schema({
    Name:String,
    Subject:String,
    age:Number

}))

module.exports = teacherdata