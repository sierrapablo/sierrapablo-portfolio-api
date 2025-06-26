import express from 'express';
import { getAllTools } from '../controllers/toolsController';

const router = express.Router();

router.get('/', getAllTools);

export default router;
