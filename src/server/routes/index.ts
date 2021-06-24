import * as express from 'express';
import authorsRouter from './authors';

const router = express.Router();

router.use('/authors', authorsRouter);

export default router;