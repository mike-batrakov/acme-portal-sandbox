import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ standby: true });
});

export default router;
