const express=require("express");
const { createUser, loginUser } = require("../controllers/user.controller");
const router=express.Router();


//create  user

router.post('/register', createUser);

//login
router.post("/login", loginUser);

module.exports=router;