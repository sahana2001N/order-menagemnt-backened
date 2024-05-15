// user.service.js 
import express from "express";
const app = express();
app.use(express.json());
import Admin from "../models/admin.model";


const loginAdmin = async (credentials) => {
    console.log('service');
    console.log(credentials);
    const { username, password } = credentials;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin || admin.password !== password)
            throw new Error('Invalid username or password');
        return admin;
    } catch (error) {
        throw new Error(error);
    }
};


const adminService = {loginAdmin};

export default adminService;
// user.service.js





