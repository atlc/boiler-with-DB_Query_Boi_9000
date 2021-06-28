import * as express from 'express';
import authorsRouter from './authors';
import postsRouter from './posts';

const router = express.Router();

router.use('/authors', authorsRouter);
router.use('/posts', postsRouter);

export default router;