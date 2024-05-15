// index.js 
import mongoose from 'mongoose';
import express from 'express';
import { registerUser, loginUser, updateUserProfile} from './controllers/user.controller.js';
import './config/db.connection.js'; // needed 
import { authenticateJWT } from './services/auth.service.js';
import cors from 'cors';
const app = express();
import Emp from './models/add.model.js';
app.use(cors()); // needed to avoid CORS errors in frontend app 
const PORT = process.env.PORT || 2000; // set PORT=2002 && npm start
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


app.use(express.json());
app.use(authenticateJWT); // uncomment to use authentication and authorization
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb://localhost:27017/ibm', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});


app.get('/employees', async (req, res) => {
    try {
        const employees = await Emp.find();

        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/register', registerUser);
app.post('/login', loginUser);
app.put('/users/:id', updateUserProfile);


 







