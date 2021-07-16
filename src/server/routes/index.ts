import { Router } from 'express';
import { hasValidToken } from '../utils/tokenCheck';
import apiRouter from './api';
import authRouter from './auth';

const router = Router();

router.use('/api', hasValidToken, apiRouter);
router.use('/auth', authRouter);

export default router;