const PostModel = require("../models/post.model")

const getPosts=async(req, res)=>{
    res.send("all posts fetched")
}

const getMyPost=async(req, res)=>{
   const {id}=req.user;
   const myPosts=await PostModel.findOne({user:id}).populate('user', 'name email');
   res.send(myPosts);
}

const createPost=async(req, res)=>{
    try{
    console.log(req.user);  
    const {id}=req.user;
    const {title, content}=req.body;

    if(!title || !content){
        return res.status(400).json({
            succes:false,
            message:'Please fill all the details'
        })
    }
    const post =new PostModel({
        user:id,
        title:title,
        content:content
    })
    await post.save();
    return res.status(201).json({
        succes:true,
        message:'Post created successfully',
        post
    })
    }catch(err){
        console.log(err);
        
    }
   

  
}

const editPost=async(req, res)=>{
    res.send("Post edited")
}
const deltePost=async(req, res)=>{
    res.send("delelePost")
}

module.exports={getPosts,getMyPost, createPost, editPost, deltePost}