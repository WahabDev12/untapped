import express from 'express'
import Multer from 'multer'
const router = express.Router()
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  uploadProfile
} from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb
  },
});


router.route('/signup').post(registerUser).get(protect, admin, getUsers)
router.post('/login', authUser)
router.patch('/upload/profile', multer.single("file"),protect, uploadProfile)
router
  .route('/profile')
  .get( getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser)

export default router
