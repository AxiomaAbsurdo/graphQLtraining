import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
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

const course = mongoose.model('course', courseSchema);

export default course;
