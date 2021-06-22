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
    postsId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'post'
    }],
    picId: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'pic'
    }],
    magazinId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'magazin'
    }
    
})
module.exports = mongoose.model('category', category);

