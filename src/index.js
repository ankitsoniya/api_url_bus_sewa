const express =require("express");
const basiRouter = require("../routers/basic");
const app=express();
const mongoose = require('mongoose');
const dotenv =require("dotenv");

const cor=require("cors");

dotenv.config();
app.use(express.json());
app.use(cor());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use("/bus",basiRouter);
app.get("/ankit",async(req,res)=>{
    const db= mongoose.connection
    const resulr=await db.collection("Attendance").find({}).toArray().then((ans) => { 
        console.log(ans); 
        res.json(ans);
    });
      
 
});

app.get('/ff', (req, res) => {
    res.send('Hello World!')
  })
const PORT=process.env.PORT || 5000
mongoose.connect("mongodb+srv://Bus:1234567890@cluster0.tsacw.mongodb.net/BusAttendence?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("mongoose connect");
    app.listen(PORT,()=>{
        console.log("server on :"+PORT);
    })
}).catch((error)=>{
    console.log("mongoose error"+error);
});


