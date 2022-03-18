import express from "express";
import { createGroup } from "../controllers/groupController.js";
import { createPostByGroupId } from "../controllers/groupController.js";
import { joinGroup } from "../controllers/groupController.js";

import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/create', protect, createGroup);
router.post('/create/:id', protect, createPostByGroupId);
router.post('/join/:id', protect, joinGroup)

export default router;



