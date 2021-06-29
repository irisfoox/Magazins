const express=require("express");
const app=express()
const mongoose=require('mongoose')
const env=require('dotenv')
env.config()
const bodyParser=require('body-parser')
const jwt=require('jsonwebtoken')
const router=require('./router/api')
app.use(bodyParser.json())
app.use('/',router)

const userSchema={
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
}
mongoose.connect(process.env.DB_CONNECT,userSchema)
.then(()=>{console.log('connect to the mongo db');})
.catch((err)=>{console.log('not connect to the mongo db',err);})

app.listen(3000,function () {
    console.log('listening');
})

