const express=require('express')
const app=express();
const router=require('./route/api');  //leftovers from magazins
const bodyParser=require('bodyparser');

app.get('/details',(req,res)=>{
    console.log('details')
    console.log(req.query.age,req.query.height)
    age:req.query.age;
    height:req.query.height;
})
app.post('/kinds',(req,res)=>{
    res.send('success');   //sends text as is
    res.json({"status":"success"})  //sends as object in body
})
app.get('/jwt',(req,res)=>{
    console.log(req.params.name);
    console.log('secret',process.env.SECRET_JWT);
    const token=jwt.sign({name:req.params.name},process.env.SECRET_JWT);
    res.status(200).json({message:'create token',token:token})
})
app.get('/verifyJwt',(req,res)=>{
    console.log(req.headers['authorization']);
    const token=jwt.verify(req.headers['authorization']); //must lowercase
    console.log(token);
    res.status(200).

})

app.listen(3000,()=>
{
    console.log('listening port 3000')
}
);
// app.use('/',route)