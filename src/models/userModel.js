import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
var uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
    id: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
});

userSchema.plugin(uniqueValidator);

userSchema.pre('save', () => {
    const hashedPassword = bcrypt.hashSync(this.password, 12);
    this.password = hashedPassword;
});

const user = mongoose.model('user', userSchema);

export default user;
