const mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }, 
    date: {
        type: Date,
        default: Date.new
    },
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Notes', notesSchema)