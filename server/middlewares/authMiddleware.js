const jwt = require("jsonwebtoken");

const authUser=async(req, res, next)=>{
    try{
       const token=req.cookies.token;
    if(!token){
        return res.status(401).json({
            succes:true,
            message:'Please login first'
        })
    }

    const verifiedUser=await jwt.verify(token , process.env.SECRET_KEY);
    if(!verifiedUser){
        return res.status(401).json({
            success:true,
            message:'please login first'
        })
    }
    req.user=verifiedUser;
     next();
    }catch(err){
        console.log(err);
          return res.status(401).json({
            success:false,
            message:'Somthing wrong !'
          })
    }
    
}

module.exports=authUser;