const express = require("express");
const { connect } = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
const AuthRoute=require("./router/AuthRoute")
const userRoute=require("./router/userRoute")
const commentRoute=require('./router/commentRoute')
const categoryRoute=require('./router/categoryRoute')
const mongoose=require("mongoose")
const app = express();
app.use(express.json());
port=3001


app.use("/api/v1/auth",AuthRoute)
app.use('/api/v1/categories', categoryRoute);
app.use('/api/v1/comment', commentRoute);
app.use('/api/v1/user', userRoute);






connect.mongoose("mongodb+srv://mrzakariasalami:ecom@cluster0.xpowccy.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
   app.listen(port,()=>{
       console.log(`http:localhost:${port}`)
   }) 
}).catch((err)=>{
    console.log(err)
})