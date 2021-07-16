import { Posts } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const all = (user_id: string) => DB_Query_Boi_9000<Posts[]>('SELECT * FROM Posts WHERE user_id=?', [user_id]);
const search = (value: string) => DB_Query_Boi_9000<Posts[]>(`SELECT * FROM Posts WHERE id LIKE ? OR user_id LIKE ? OR title LIKE ? OR description LIKE ? OR content LIKE ? OR date LIKE ?`, [`%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`, `%${value}%`]);
const single_post = (id: number) => DB_Query_Boi_9000<Posts[]>('SELECT * FROM Posts WHERE id=?', [id]);
const create = (post: Posts) => DB_Query_Boi_9000('INSERT INTO Posts SET ?', [post]);
const update = (content: Posts['content'], id: Posts['id']) => DB_Query_Boi_9000('UPDATE Posts SET content=? WHERE id=?', [content, id]);
const destroy = (id: Posts['id'], user_id: string) => DB_Query_Boi_9000('DELETE FROM Posts WHERE id=? AND user_id=?', [id, user_id]);


export default {
    all,
    search,
    single_post,
    create,
    update,
    destroy
}