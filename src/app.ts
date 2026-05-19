import express from 'express';
import indexRouter from './routes/index';
import healthRouter from './routes/health';
import versionRouter from './routes/version';
import metricsRouter from './routes/metrics';
import statusRouter from './routes/status';

const app = express();
app.use('/', indexRouter);
app.use('/health', healthRouter);
app.use('/version', versionRouter);
app.use('/metrics', metricsRouter);
app.use('/status', statusRouter);

export default app;
