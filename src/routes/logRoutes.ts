import express from 'express';
import { getAllLogs, createLog } from '../controllers/logController';

const router = express.Router();

router.get('/', getAllLogs);
router.post('/', createLog);

export default router;
