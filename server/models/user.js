const mongoose = require('mongoose');
const user = mongoose.Schema({
    name: {
        type: String,
        default: 'miri',
        trim: true
    },
    mail: {
        type: String,
        require: true,
        minlength: '6'
    },
    password: {
        type: String,
        require: true,
        minlength: '8'
    },
    magazins: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'magazin'
    }]
})

module.exports = mongoose.model('user', user);