const User=require('../models/user');
const repository=require('../repository/repository');

const createUser=async(userBody,name)=>{
    return new Promise((req,res)=>{
        const newUser = new User(userBody)
        newUser.name=name;
        repository.saveObject(newUser).then((userSave)=>{
            resolve(userSave);
        }).catch(err=>reject(err))
    })
}
module.exports={createUser}