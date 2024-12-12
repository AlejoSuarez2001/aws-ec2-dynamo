import express from 'express'
import task from "./routes/task.routes.js";
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.get('/', (req, res) => {
    res.send('AWS EC2 Integration');
});

app.use(express.json());

app.use("/api/task", task);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});