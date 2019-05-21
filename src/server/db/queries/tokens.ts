import { Query } from '../index';

const findOne =  (id: number, token: string) => Query(`SELECT * FROM tokens WHERE id = '${id}' AND token = ?`, [token]);
const insert =  (userid: number) => Query(`INSERT INTO tokens (userid) VALUES ('${userid}')`);
const update =  (id: number, token: string) => Query(`UPDATE tokens SET tokens = '${token}' WHERE id = ${id}`);

export default {
    findOne,
    insert,
    update
}