import express from "express";
import { createGroup, editGroupDetails } from "../controllers/groupController.js";
import { createPostByGroupId } from "../controllers/groupController.js";
import { joinGroup } from "../controllers/groupController.js";

import { groupAdmin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/create', protect, createGroup)
router.post('/create/:id', protect, createPostByGroupId)
router.post('/join/:id', protect, joinGroup)
router.patch('/edit/:id', protect, groupAdmin, editGroupDetails)
router.delete('/delete/:id', protect, groupAdmin)


export default router;



