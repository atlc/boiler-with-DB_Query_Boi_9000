import { authors } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const all = () => DB_Query_Boi_9000<authors[]>('SELECT * FROM authors');
const single_author = (id: number) => DB_Query_Boi_9000<authors[]>('SELECT * FROM authors WHERE id=?', [id]);
const create = (user: authors) => DB_Query_Boi_9000('INSERT INTO authors SET ?', [user]);

export default {
    all,
    single_author,
    create
}