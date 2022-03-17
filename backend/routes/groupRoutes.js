import express from "express";
import { createGroup } from "../controllers/groupController.js";
import { createPostByGroupId } from "../controllers/groupController.js";

import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/create',protect, createGroup);
router.post('/create/:id', protect, createPostByGroupId);

export default router;



