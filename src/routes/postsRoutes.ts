import express from 'express';
import { getAllPosts } from '../controllers/postsController';

const router = express.Router();

router.get('/', getAllPosts);

export default router;