import express from 'express';
import { getAllLogs } from '../controllers/logController';

const router = express.Router();

router.get('/', getAllLogs);

export default router;
