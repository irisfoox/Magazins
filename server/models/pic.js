const mongoose = require('mongoose');
const pic = mongoose.Schema({
    pic: {
        
    },
    title: {
        type: String,
        require: true
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
})
module.exports = mongoose.model('pic', pic);
