const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')

// load environment variables
dotenv.config()

//database connection
const connectDB=async()=>{
    try{
     await mongoose.connect(process.env.MONGO_URL)
     console.log("db connected successfully")
    }catch(error){
        console.log(error)
    }
}

//middlewares
app.use(express.json())
app.use(cookieParser())

//Route middlewares
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)

//Start server
app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("Port is running on port "+process.env.PORT)
})