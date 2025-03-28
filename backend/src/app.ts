import express from 'express';
import { json } from 'body-parser';
import userRoutes from './routes/userRoutes.js';
import {errorHandler} from './middlewares/errorHandler.js';

const app = express();

app.use(json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;