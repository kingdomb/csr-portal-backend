// index.js
import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  '/auth',
  createProxyMiddleware({ target: 'http://localhost:4001', changeOrigin: true })
);
app.use(
  '/users',
  createProxyMiddleware({ target: 'http://localhost:4002', changeOrigin: true })
);
app.use(
  '/subscriptions',
  createProxyMiddleware({ target: 'http://localhost:4003', changeOrigin: true })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
