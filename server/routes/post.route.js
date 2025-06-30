const express=require("express");
const { getPosts, createPost, getMyPost, editPost, deltePost } = require("../controllers/post.controller");

const router=express.Router();

//create post
router.post('/post', createPost)

//get  all and my post
router.get("/posts", getPosts);
router.get("/myPosts", getMyPost);

//edit
router.put("/post", editPost);

//delete
router.delete("/post", deltePost);

module.exports=router;
