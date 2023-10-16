const mongoose = require("mongoose")

const creditSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    value: {
        type: Number,
        trim: true,
        required: true
    },
    color: {
        type: String,
        require: true,
        unique: true
    }
}, { collection: 'assignment_collection'})

module.exports = mongoose.model('assignment_collection', creditSchema)