const express = require("express");
const app = express();
const mongoose = require('mongoose');

const connectDB = async ()=>{
 try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test'); 
    console.log("DB is connect");
 } catch (error) {
 console.log("DB is not connect");
 console.log(error.message);
 process.exit(1);
 }
}; 
 
app.listen(3000, async()=>{
   console.log("server is running at http://localhost:"); 
   await connectDB();
});

app.get("/",(req,res) =>{
    res.send("this is home page");
});
app.get("/home",(req,res) =>{
res.send("This is server home page i shere");
});