const getPosts=async(req, res)=>{
    res.send("all posts fetched")
}

const getMyPost=async(req, res)=>{
    res.send("my posts fectched")
}

const createPost=async(req, res)=>{
    res.send("my post created")
}

const editPost=async(req, res)=>{
    res.send("Post edited")
}
const deltePost=async(req, res)=>{
    res.send("delelePost")
}

module.exports={getPosts,getMyPost, createPost, editPost, deltePost}