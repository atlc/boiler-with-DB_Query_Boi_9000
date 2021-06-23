import * as mysql from 'mysql';
import { sqlConfig } from '../config';
import { authors, posts } from '../../types';

const pool = mysql.createPool(sqlConfig);

const DB_Query_Boi_9000 = <T>(query: string, values?: any[]) => {
    const formattedSql = mysql.format(query, values);
    console.log({ formattedSql });

    return new Promise<T>((resolve, reject) => {
        pool.query(formattedSql, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};

async function doSomething() {
    const allPosts = await DB_Query_Boi_9000<posts[]>('SELECT * FROM posts');
    console.log(allPosts);
}

export const lmao = () => doSomething();