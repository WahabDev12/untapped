import express from 'express';
import { protect } from '../middleware/authMiddleware.js';

import { 
    createComment,
    createPost,
    deleteComment,
    deletePost,
    dislikePost,
    editComment,
    editPost,
    likePost,
    postComments,
    queryAllPosts,
    querySinglePost
} from '../controllers/postController.js';

const router = express.Router();

router.post('/create',protect, createPost)
router.get('/all', queryAllPosts)
router.put('/like/:id', protect, likePost)
router.put('/dislike/:id', protect, dislikePost)
router.put('/create/comment/:id', protect, createComment)
router.patch('/edit/:id', protect, editPost)
router.patch('/commentedit/:id/:comment_id', protect, editComment)
router.delete('/delete/:id', protect, deletePost)
router.delete('/commentdelete/:id/:comment_id', protect, deleteComment)
router.get('/comments/all/:id', protect,postComments)
router.get('/single/:id', protect, querySinglePost)

export default router;