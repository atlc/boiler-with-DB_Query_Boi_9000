import { posts } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const all = () => DB_Query_Boi_9000<posts[]>('SELECT * FROM posts');
const search = (value: string) => DB_Query_Boi_9000<posts[]>(`SELECT * FROM posts WHERE id LIKE ? OR author_id LIKE ? OR title LIKE ? OR description LIKE ? OR content LIKE ? OR date LIKE ?`, [`%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`]);
const single_post = (id: number) => DB_Query_Boi_9000<posts[]>('SELECT * FROM posts WHERE id=?', [id]);
const create = (post: posts) => DB_Query_Boi_9000('INSERT INTO posts SET ?', [post]);
const update = (content: posts['content'], id: posts['id']) => DB_Query_Boi_9000('UPDATE posts SET content=? WHERE id=?', [content, id]);
const destroy = (id: posts['id'], author_id: string) => DB_Query_Boi_9000('DELETE FROM posts WHERE id=? AND author_id=?', [id, author_id]);


export default {
    all,
    search,
    single_post,
    create,
    update,
    destroy
}