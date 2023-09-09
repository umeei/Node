const express = require('express');
const app = express()
const port=process.env.PORT || 3000;
const mongoose = require('mongoose');
app.use(express.json())


const studentapi= require("./routes/Student");
app.use("/api/student",studentapi)

const Teacherapi= require("./routes/Teacher");
app.use("/api/teacher",Teacherapi)




mongoose.connect('mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/Sdata?retryWrites=true&w=majority').then((res)=>{
    console.log("Database is connected!")
}).catch((err)=>{
    console.log(err.message)
})


app.listen(port, ()=>{
    console.log('Server is running...');
})