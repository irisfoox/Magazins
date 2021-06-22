const mongoose = require('mongoose');
const post = mongoose.Schema({
    title: {
        type: String,
        require: true
    }, 
    subheader: {
        type: String
    }, 
    longtext: {
        type: String
    }, 
    pic: {  

    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },
    date: {
        type:Date,
        default:new Date(Date.now()),
    },
    magazinId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'magazin'
    }
})
module.exports = mongoose.model('post', post);

