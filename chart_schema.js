const mongoose = require("mongoose")

const chartSchema = new mongoose.Schema({
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
}, { collection: 'mongodb_collection'})

module.exports = mongoose.model('mongodb_collection', chartSchema)