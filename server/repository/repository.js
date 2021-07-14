const {query}=require('express');
const {populate}=require('../models/user');
//file for generic controler functions instead of specific ones in controler files

const saveObject=(doc)=>{
    return new Promise(async (resolve,reject)=>{
        try{
            const saveDoc=await doc.save();
            resolve(saveDoc);
        }
        catch(err){
            reject(err)
        }
    })
}