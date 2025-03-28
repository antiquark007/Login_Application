import express from 'express';
import { PrismaClient } from '@prisma/client';
import setUserRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

setUserRoutes(app);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});