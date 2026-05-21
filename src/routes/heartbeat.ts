import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ heartbeat: true });
});

export default router;
