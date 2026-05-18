import express from 'express';
import indexRouter from './routes/index';
import healthRouter from './routes/health';

const app = express();
app.use('/', indexRouter);
app.use('/health', healthRouter);

export default app;
