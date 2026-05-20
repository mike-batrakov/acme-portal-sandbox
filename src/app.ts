import express from 'express';
import indexRouter from './routes/index';
import healthRouter from './routes/health';
import versionRouter from './routes/version';
import metricsRouter from './routes/metrics';
import statusRouter from './routes/status';
import pingRouter from './routes/ping';
import readyRouter from './routes/ready';

const app = express();
app.use('/', indexRouter);
app.use('/health', healthRouter);
app.use('/version', versionRouter);
app.use('/metrics', metricsRouter);
app.use('/status', statusRouter);
app.use('/ping', pingRouter);
app.use('/ready', readyRouter);

export default app;
