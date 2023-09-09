const express = require('express');
const app = express()
const port= 2000;
const mongoose = require('mongoose');
app.use(express.json())


const studentapi= require("./routes/Student");
app.use("/api/student",studentapi)

const Teacherapi= require("./routes/Teacher");
app.use("/api/teacher",Teacherapi)




mongoose.connect('mongodb://127.0.0.1:27017/Sdata').then((res)=>{
    console.log("Database is connected!")
}).catch((err)=>{
    console.log(err.message)
})


app.listen(port, ()=>{
    console.log('Server is running...');
})