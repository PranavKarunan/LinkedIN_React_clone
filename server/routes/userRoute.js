import express from 'express';
const router = express.Router();
import {userRegister,userLogin,otpValidation} from '../controllers/userControllers.js'




router.post('/register', userRegister)
router.post('/otpValidation', otpValidation)
router.post('/login', userLogin)


export default router;