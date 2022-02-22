const mongoose = require('mongoose');
const category = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'post'
    }],
    pic: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'pic'
    }]
    
})
module.exports = mongoose.model('category', category);