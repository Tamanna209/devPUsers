const mongoose=require('mongoose')



const mmyDb=async()=>{
    try{
    //    console.log(process.env.DB_URL);
        await mongoose.connect(process.env.DB_URL)
  console.log('Connected to DB');
    }catch(err){
        console.log(err);
        
    }
  
  
}

module.exports=mmyDb