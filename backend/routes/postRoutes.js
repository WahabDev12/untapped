import express from 'express';
const router = express.Router();

import { createComment, createPost } from '../controllers/postController.js';

import { protect } from '../middleware/authMiddleware.js';

router.post('/create',protect, createPost);
router.post('/create/comment/:id', protect, createComment)

export default router;