import mongoose from 'mongoose';
//import userService from '../services/user.service.js';
import express from 'express';
const app = express();
app.use(express.json());


const Productdata= new mongoose.Schema({
    id: {
        type: Object,
        default: ''
    },
    
    name: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    price:{
        type: Number,
        default: ''

    }
});
const Product=mongoose.model('products',Productdata);
 export default Product;