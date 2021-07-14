//const User=require('../models/user');  in past
const service=require('../service.user.service');

const createUser=async(req,res)=>{
    try{
        console.log("create user",req.body);
        const userBody=req.body;
        const name=req.params.name;
        const result=await service.createUser(userBody,name);
        res.status(200).json({
            message:'user created successfully',
            newUser:result
        })
    }catch(error){
        res.status(400).send(error)
    }
}