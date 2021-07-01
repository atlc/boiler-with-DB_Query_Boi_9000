import { Users } from '../../../types';
import { DB_Query_Boi_9000 } from '../index';

const register = (id: string, email: string, pw: string) => DB_Query_Boi_9000('INSERT INTO Users (id, email, password) VALUES (?, ?, ?)', [id, email, pw]);
const getByEmail = (email: string) => DB_Query_Boi_9000<Users[]>('SELECT * FROM Users WHERE email=?', [email]);

export default {
    register,
    getByEmail
}