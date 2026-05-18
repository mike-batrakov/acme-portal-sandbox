import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ version: '0.0.1' });
});

export default router;
