import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/authRoute.js';
import connectDB from './config/db.js';

const app = express();

dotenv.config();
connectDB();

app.use(cors({
    origin: "https://eliteestate00.netlify.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}
));
app.use(express.json());

app.use('/api/auth', router);

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`SHU SHU SERVER STARTED ON ${port}`)
});