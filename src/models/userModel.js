import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

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

userSchema.pre('save', () => {
    const hashedPassword = bcrypt.hashSync(this.password, 12);
    this.password = hashedPassword;
});

const user = mongoose.model('user', userSchema);

export default user;
