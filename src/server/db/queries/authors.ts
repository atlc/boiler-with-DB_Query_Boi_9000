import { authors } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const all = () => DB_Query_Boi_9000<authors[]>('SELECT * FROM authors');
const search = (value: string) => DB_Query_Boi_9000<authors[]>('SELECT * FROM authors WHERE id=? OR first_name=? OR last_name=? OR birthdate=? OR added=? OR email=?', [value, value, value, value, value, value]);
const single_author = (id: number) => DB_Query_Boi_9000<authors[]>('SELECT * FROM authors WHERE id=?', [id]);
const create = (user: authors) => DB_Query_Boi_9000('INSERT INTO authors SET ?', [user]);
const update = (email: authors['email'], id: authors['id']) => DB_Query_Boi_9000('UPDATE authors SET email=? WHERE id=?', [email, id]);
const destroy = (id: authors['id']) => DB_Query_Boi_9000('DELETE FROM authors WHERE id=?', [id]);


export default {
    all,
    search,
    single_author,
    create,
    update,
    destroy
}