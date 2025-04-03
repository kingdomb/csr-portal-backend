// index.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5002;

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Subscription Service Running'));

app.listen(PORT, () => console.log(`Subscription Service running on port ${PORT}`));
