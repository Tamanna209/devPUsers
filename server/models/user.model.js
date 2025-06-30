const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String
        
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minLength:2,
        maxLength:50
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true, 
        minLength:6,
        select:false
    }
}, {timestamps:true})

const UserModel=mongoose.model('Users', userSchema);

module.exports=UserModel;