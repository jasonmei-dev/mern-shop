import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();
const port = process.env.PORT || 5500;
const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.use(express.json());
app.use('/api/products', productRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  connectDB();
  console.log(`Server running on port ${port}`);
});
