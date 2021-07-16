import * as express from 'express';
import postsRouter from './posts';

const router = express.Router();

router.use('/posts', postsRouter);

export default router;