

const mongoose = require('mongoose')

const busaddcontrollers= async(req,res,next)=>{
    const request = req.body;

const db= mongoose.connection
const resulr=await db.collection("Attendance").find(request).toArray().then((ans) => { 
    //console.log(ans); 
    res.json(ans);
});
 

};
module.exports={busaddcontrollers};