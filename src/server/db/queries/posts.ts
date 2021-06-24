import { posts } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const all = () => DB_Query_Boi_9000<posts[]>('SELECT * FROM posts');
const single_author = (id: number) => DB_Query_Boi_9000<posts[]>('SELECT * FROM posts WHERE id=?', [id]);
