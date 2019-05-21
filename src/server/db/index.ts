import * as mysql from 'mysql';

import books from './queries/books';
import categories from './queries/categories';
import tokens from './queries/tokens';
import users from './queries/users';

let pool = mysql.createPool({
    connectionLimit: 10,
    user: 'bookstore',
    password: 'rolo',
    host: 'localhost',
    database: 'books'
});

export const Query = (query: string, values?: any) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, [values], (err, results) => {
            if(err) reject(err);
            resolve(results);
        });
    });
};

export default {
books,
categories,
tokens,
users
}