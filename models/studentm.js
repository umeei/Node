const mongoose = require('mongoose')

var studentModel = mongoose.model("students", new mongoose.Schema({
    fullname:String,
    fathername:String,
    age:Number
}))
module.exports = studentModel