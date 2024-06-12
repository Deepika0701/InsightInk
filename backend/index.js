const express=require('express')
const app=express()


//database connection
const connectDB=async()=>{
    try{
     await mongoose.connect()
    }catch(error){
        console.log(error)
    }
}

app.listen(5000,()=>{
    console.log("Port is running on port 5000")
})