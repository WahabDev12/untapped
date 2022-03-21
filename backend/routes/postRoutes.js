import express from 'express';
const router = express.Router();

import { createComment, createPost, dislikePost, likePost } from '../controllers/postController.js';

import { protect } from '../middleware/authMiddleware.js';

router.post('/create',protect, createPost);
router.put('/create/comment/:id', protect, createComment)
router.post('/like/:id', protect, likePost)
router.post('/dislike/:id', protect, dislikePost)

export default router;