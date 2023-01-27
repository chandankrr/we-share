import express from 'express';
import { login, logout, register } from '../controllers/auth.js';

const router = express.Router();

router.post('login', login);
router.get('register', register);
router.get('logout', logout);

export default router;
