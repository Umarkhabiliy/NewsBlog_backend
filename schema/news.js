const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const NewsSchema = mongoose.model('new', Schema);
module.exports = NewsSchema;