// user.controller.js 
import { generateToken } from '../services/admin.auth.service.js';
import adminService from '../services/admin.service.js';
//import User from '../models/user.model.js';


const loginAdmin = async (req, res, next) => {
    console.log('controller');
    console.log(req.body);
    try {
        const admin = await adminService.loginAdmin(req.body);
        const token = generateToken(admin);
        res.status(200).json({ admin, token });
    } catch (error) {
        res.status(401).json(error);
    }
};






export {loginAdmin};
