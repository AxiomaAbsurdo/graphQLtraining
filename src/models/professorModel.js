import mongoose from 'mongoose';

const professorSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
});

const professor = mongoose.model('professor', professorSchema);

export default professor;
