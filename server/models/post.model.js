const mongoose=require("mongoose");

const postModel=new mongoose.Schema({
    user:{
    type:mongoose.Schema.Type.ObjectId, 
    ref:'Users',
    required:true
    },
    title:{
        type:String,
         required:true,
         minLength:5,
         trim:true
    }, 
    content:{
        type:String,
        required:true,
        trim:true,
        minLength:10
    }
}, {timestamps:true})