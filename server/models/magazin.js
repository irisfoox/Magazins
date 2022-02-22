const mongoose = require('mongoose');
const magazin = mongoose.Schema({
    title: {
        type: String,
        require
    },
    magazinShortExplaination: {
        type: String
    },
    mainPics: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'pic'
    }],
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'post'
    }],
    categories: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    }],
    userId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'user'
    }

})
module.exports = mongoose.model('magazin', magazin);

