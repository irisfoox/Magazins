const mongoose = require('mongoose');
const pic = mongoose.Schema({
    pic: {
        require: true
    },
    title: {
        type: String,
    },
    date: {
        type:Date,
        default:new Date(Date.now())
    },
    longText: {
        type: String
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'category'
    },
    magazinId:{
        type: mongoose.Schema.Types.ObjectId, ref: 'magazin'
    }
})
module.exports = mongoose.model('pic', pic);
