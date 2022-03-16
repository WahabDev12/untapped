import express from 'express';
const router = express.Router();

import { createPost } from '../controllers/postController.js';

import { protect } from '../middleware/authMiddleware.js';

router.post('/create',protect, createPost);

export default router;