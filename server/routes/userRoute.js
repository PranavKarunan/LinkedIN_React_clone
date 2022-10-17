import express from 'express';
const router = express.Router();
import {userRegister,userLogin,otpValidation} from '../controllers/userControllers.js'
import {newPost,getAllPosts} from '../controllers/postControllers.js'



router.post('/register', userRegister)
router.post('/otpValidation', otpValidation)
router.post('/login', userLogin)
router.post('/createPost',newPost)
router.get('/posts',getAllPosts)

export default router;