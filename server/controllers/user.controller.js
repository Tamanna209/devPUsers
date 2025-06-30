const bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const createUser = async (req, res) => {
  //    res.send("user created")
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password ) {
        return res.status(400).json({
        succes:false,
        message:'Please fill all the fields'
       })
    }
    if(password.length < 6){
        return res.status(400).json({
            succes:false,
            message:'Password must be atleast 6 characters long'
        })
    }
    const hashedPass = await bcrypt.hash(password, 10);
    if (!hashedPass) {
        return res.status(400).json({
            success:false,
            message:'try again'
        })
    }
    const user = new UserModel({
      name: name,
      email: email,
      password: hashedPass,
    });
    await user.save();

    //remove passoword before sendng
    const  userObj=user.toObject();
    delete userObj.password;

    return res.status(201).json({
        succes:true,
        message:'User created succefully',
        user:userObj
    })
  } catch (err) {
    console.log(err);
    // res.send(err)
     if(err.name == "ValidationError"){
         return res.status(500).json({
        success:false,
        message: Object.values(err.errors)[0].message
    })
     }
     return res.status(500).json({
        success:false,
        message:err.message
     })
    
  }
};

const loginUser = async (req, res) => {
  // req.send("user logged in")
  try {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            succes:false,
            message:'Please fill all the fields'
        })
    }

    const user = await UserModel.findOne({ email: email }).select('+password');

    if (!user) {
      return res.status(401).json({
        success:false,
        message:' "Please try again later with valid Email or Password";'
      })
     
    }

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
       return res.status(401).json({
        success:false,
        message:' "Please try again later with valid Email or Password";'
      })
    }
  
    const token = jwt.sign({ id : user._id ,mail: user.email }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });

    res.cookie("token", token);

     //remove password befire sending user object
     const userObj=user.toObject();
     delete userObj.password;

     return res.status(200).json({
      success: true,
      message: "User logged In successfully",
      user:userObj,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
        success:false,
        message:'Server error'
    })
  }
};

module.exports = { createUser, loginUser };
