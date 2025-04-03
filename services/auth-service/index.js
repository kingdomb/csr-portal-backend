// index.js
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5001

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.send('Auth Service Running'));

app.listen(PORT, () => console.log(`Auth Service running on port ${PORT}`));
