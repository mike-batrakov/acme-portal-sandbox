import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ awake: true });
});

export default router;
