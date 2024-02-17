const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    text:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    timeStamp:{
        type: String,
        default: Date.now()
    }

})

module.exports = mongoose.model('Task', taskSchema)