import mongoose from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
});

courseSchema.plugin(uniqueValidator);

const course = mongoose.model('course', courseSchema);

export default course;
