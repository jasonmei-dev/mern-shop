import express from 'express';
import { loginUser, registerUser, logoutUser, getUserProfile, updateUserProfile, getUsers, getUserById, deleteUser, updateUser } from '../controllers/userContoller.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.route('/').get(getUsers).post(registerUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

export default router;
