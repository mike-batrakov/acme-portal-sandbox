import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({ requests_total: 0 });
});

export default router;
