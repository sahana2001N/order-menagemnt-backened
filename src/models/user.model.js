import mongoose from 'mongoose';
import express from 'express';
const app = express();
app.use(express.json());
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    salary:{
        type: String,
        default: ''

    }
});
const User = mongoose.model('User', userSchema);
export default User;
