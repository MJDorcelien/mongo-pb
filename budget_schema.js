const mongoose = require("mongoose")

const budgetSchema = new mongoose.Schema({
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
}, { collection: 'assignment_budget'})

module.exports = mongoose.model('assignment_budget', budgetSchema)