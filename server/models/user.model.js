const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
    name:{
        type:String       
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minlength:2,
        maxlength:50,
        lowercase:true,
        validate:[validator.isEmail, 'invalid Email address']
    },
    password:{
        type:String,
        required:true, 
        minlength:6,
        select:false,
        trim:true
    }
}, {timestamps:true})

const UserModel=mongoose.model('Users', userSchema);

module.exports=UserModel;