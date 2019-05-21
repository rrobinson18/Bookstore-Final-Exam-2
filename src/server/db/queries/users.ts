import { Query } from '../index';

const allUsers = () => Query(`SELECT * FROM users`);
const oneUser = (id: number) => Query(`SELECT * from users WHERE id = ?`, [id]);
const findOneByEmail = (email: string) => Query(`SELECT * FROM users WHERE email = '${email}' LIMIT 1`);
const getOneById = (id: number) => Query(`SELECT * FROM users WHERE id = '${id}' LIMIT 1`);
const insert = (user: any) => Query(`INSERT INTO users (email, password) VALUES ?`, user);
const findUsersName = (name: string) => Query(`SELECT * FROM users WHERE name = '${name}' LIMIT 1`);

export default {
    allUsers,
    oneUser,
    findOneByEmail,
    getOneById,
    insert,
    findUsersName
}