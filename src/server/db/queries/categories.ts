import { Query } from '../index';

const getCatorgories = () => Query(`SELECT * FROM  categoies`);
const getOneCatorgories = (id: number) => Query(`SELECT * FROM categoies WHERE id = ?`, [id]);



export default {
    getCatorgories,
    getOneCatorgories
}