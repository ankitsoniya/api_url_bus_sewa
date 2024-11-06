const mongoose = require('mongoose');

const BusScheema=mongoose.Schema({

    busname:{
        type:String,
        require:true
    }
    
  

});
module.exports=mongoose.model("bussfff",BusScheema);