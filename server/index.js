import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

//error handling 
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})



app.get('/', async (req, res) => {
    res.status(200).json({ 
        message: 'Hello from DALL-E!' 
    });
})

const connectDB = async () => {
        mongoose.set('strictQuery', true);
        await mongoose
        .connect(process.env.MONGODB_URL)
        .then(() => console.log('MongoDB connected successfully!'))
        .catch((error) => console.log('MongoDB connection failed!', error));
}

const startServer = async () => {
    try {
        connectDB();
        app.listen(5000, () => {
        console.log('Server is running on port 5000');
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();
