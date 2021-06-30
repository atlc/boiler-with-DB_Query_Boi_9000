import { DB_Query_Boi_9000 } from '../index';

const register = (id: string, email: string, pw: string) => DB_Query_Boi_9000('INSERT INTO Users (id, email, password) VALUES (?, ?, ?)', [id, email, pw]);

export default {
    register
}