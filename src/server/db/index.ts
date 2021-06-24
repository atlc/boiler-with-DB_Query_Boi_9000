import * as mysql from 'mysql';
import { sqlConfig } from '../config';
import { MySQL_Res } from '../../types';

const pool = mysql.createPool({
    ...sqlConfig,
    timeout: 60000
});

export const DB_Query_Boi_9000 = <T = MySQL_Res>(query: string, values?: any[]) => {
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