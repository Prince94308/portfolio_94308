import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/contact', contactRoutes);

app.get('/', (req, res) => {
    res.send('Hello from DALL-E!');
})

const startServer = async () => {
    try {
        // mongoose.set('strictQuery', true);
        // await mongoose.connect(process.env.MONGODB_URL);
        // console.log('MongoDB connected');

        app.listen(5000, () => console.log('Server has started on port 5000'))
    } catch (error) {
        console.log(error);
    }
}

startServer();
