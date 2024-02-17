const mongoose = require('mongoose')

const followerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    followerTo:{
        type: String,
        required: true
    },
    followedSince:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Follower', followerSchema)