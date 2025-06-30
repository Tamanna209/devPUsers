const createUser=async(req, res)=>{
   res.send("user created")
}

const loginUser=async(req, res)=>{
    req.send("user logged in")
}


module.exports={createUser, loginUser}