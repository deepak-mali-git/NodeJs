const mongoose = require('mongoose')
const playlistSchema = new mongoose.mongoose.Schema({
    name:String,
    length:Number,
    form:String
})

module.exports = mongoose.model('playlist',playlistSchema,'playlist')

