import express from "express";
import { 
    createGroup,
    editGroupDetails, 
    createPostByGroupId, 
    joinGroup,
    deleteGroup,
    queryGroupPosts,
    queryAllGroups,
    groupMembers,
    userLeaveGroup
    
} from "../controllers/groupController.js";

import { groupAdmin, protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post('/create', protect, createGroup)
router.post('/create/:id', protect, createPostByGroupId)
router.post('/join/:id', protect, joinGroup)
router.patch('/edit/:id', protect, groupAdmin, editGroupDetails)
router.delete('/delete/:id', protect, groupAdmin, deleteGroup)
router.get('/posts/:id', protect, queryGroupPosts)
router.get('/all', queryAllGroups)
router.get('/members/:id', protect, groupMembers)
router.put('/leave/:id', protect, userLeaveGroup)

export default router;



