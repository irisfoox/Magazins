const mongoose = require('mongoose');
const post = mongoose.Schema({
    title: {
        type: String,
        require: true
    }, 
    subheader: {
        type: String,
    }, 
    longtext: {
        type: String,
        require: true
    }, 
    pic: {
      
    }, 
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },
    date: {
        type:Date,
        default:new Date(Date.now()),
        require: true
    }   
})
module.exports = mongoose.model('post', post);

