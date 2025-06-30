const express= require("express");
const app= express();
const dotenv=require('dotenv');
const mmyDb = require("./config/dbConnection");
const userRouter=require("./routes/user.route");
const postRouter=require("./routes/post.route");
const cookieParser=require("cookie-parser");
dotenv.config();

const PORT = process.env.PORT;

//middlwares
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/user", userRouter);
app.use('/api/v1/post', postRouter)


app.listen(PORT, async()=>{
   await mmyDb()
    console.log(`Server started and listening at http://localhost:${PORT}`);
    
})