import { Query } from '../index';

const getCatorgories = () => Query(`SELECT * FROM  categoies`);

export default {
    getCatorgories
}