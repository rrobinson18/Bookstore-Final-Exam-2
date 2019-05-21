import { Query } from '../index';

const getAll = () => Query(`SELECT * FROM books`);
const getOne = (id: number) => Query(`SELECT b.*, c.name FROM books b JOIN categories c ON c.id = b.categoryid WHERE b.id = ?`, [id]);
const deleteBook = (id: number) => Query(`DELETE FROM books WHERE id = ?`, [id]);
const postBook = (title: string, author: string, price: number) => Query(`INSERT INTO books (title, author, price) VALUES ('${title}', '${author}', '${price}')`);
const updateBook = (id: number, title: string, author: string, price: number) => Query(`UPDATE books SET title = '${title}', author = '${author}', price = '${price}' WHERE id = ?`, [id]);


export default {
    getAll,
    getOne,
    deleteBook,
    postBook,
    updateBook
}