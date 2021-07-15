import { Router } from 'express';
import { isAdmin } from '../utils/tokenCheck';
import apiRouter from './api';
import authRouter from './auth';

const router = Router();

router.use('/api', isAdmin, apiRouter);

router.use('/auth', authRouter);


export default router;