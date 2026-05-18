import express from 'express';
import indexRouter from './routes/index';
import healthRouter from './routes/health';
import versionRouter from './routes/version';

const app = express();
app.use('/', indexRouter);
app.use('/health', healthRouter);
app.use('/version', versionRouter);

export default app;
