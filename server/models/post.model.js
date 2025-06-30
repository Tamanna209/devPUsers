const mongoose=require("mongoose");

const postSchema=new mongoose.Schema({
    user:{
    type:mongoose.Schema.Types.ObjectId, 
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

const PostModel=mongoose.model('posts', postSchema);

module.exports=PostModel;