const PostModel = require("../models/post.model")

const getPosts=async(req, res)=>{
    try{
    const posts=await PostModel.find().populate('user', "name email");
    if(!posts){
        return res.status(400).json({
            succes:false,
            message:'No post found'
        })
    }
    return res.status(200).json({
        succes:true,
        message:'All posts fetched',
        posts
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            succes:false,
            message:'Something went wrong'
        })
        
    }
   
}

const getMyPost=async(req, res)=>{
    try{
    const {id}=req.user;
   const myPosts=await PostModel.findOne({user:id}).populate('user', 'name email');
    if(!myPosts){
        return res.status(400).json({
            succes:false,
            message:'No post found'
        })
    }
    return res.status(200).json({
        success:true,
        message:'All your posts fetched',
        myPosts
    })
    }catch(err){
        console.log(err);
        return res.status(500).json({
            succes:false,
            message:'Somethig went wrong'
        })
        
    }
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