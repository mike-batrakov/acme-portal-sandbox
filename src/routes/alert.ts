import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ alert: true });
});

export default router;
