const express =require("express");
const { send } = require("express/lib/response");
const { busaddcontrollers } = require("../controllers/buscontrollers");
const basiRouter=express.Router();
basiRouter.post("/addbus",busaddcontrollers);
module.exports=basiRouter;
