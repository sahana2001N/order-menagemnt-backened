import mongoose from 'mongoose';
import express from 'express';
const app = express();
app.use(express.json());
const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    
});
const Admin = mongoose.model('login', adminSchema);
export default Admin;
