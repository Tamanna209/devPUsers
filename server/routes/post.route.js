const express=require("express");
const { getPosts, createPost, getMyPost, editPost, deltePost } = require("../controllers/post.controller");
const authUser = require("../middlewares/authMiddleware");

const router=express.Router();

//create post
router.post('/post', authUser ,  createPost)

//get  all and my post
router.get("/posts",  authUser, getPosts);
router.get("/myPosts", authUser, getMyPost);

//edit
router.put("/post", editPost);

//delete
router.delete("/post", deltePost);

module.exports=router;
