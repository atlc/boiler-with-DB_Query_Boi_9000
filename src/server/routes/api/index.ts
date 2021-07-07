import * as express from 'express';
import { makeSureTokenIsValid } from '../../utils/tokenCheck';
import authorsRouter from './authors';
import postsRouter from './posts';

const router = express.Router();

router.use('/authors', makeSureTokenIsValid, authorsRouter);
router.use('/posts', postsRouter);

export default router;