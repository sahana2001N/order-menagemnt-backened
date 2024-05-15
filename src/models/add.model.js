import mongoose from 'mongoose';
//import userService from '../services/user.service.js';
import express from 'express';
const app = express();
app.use(express.json());


const Empdata= new mongoose.Schema({
    firstName: {
        type: String,
        default: ''
    },
    
    email: {
        type: String,
        default: ''
    },
    aadhaar: {
        type: Number,
        default: ''
    },
    salary:{
        type: Number,
        default: ''

    }
});
const Employee=mongoose.model('Emp',Empdata);
 export default Employee;