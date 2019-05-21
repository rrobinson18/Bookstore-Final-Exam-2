import { Router } from 'express';
import db from '../../db';
import { RequestHandler } from 'express-serve-static-core';

let router = Router();

const isAdmin: RequestHandler = (req, res, next) => {
    if(!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401)
    } else {
        return next();
    }
}

router.get('/:id?', async (req, res, next) => {
    let id = req.params.id;
    if (id) {
        try {
        let [book] = await db.books.getOne(id);
        res.json(book);  
        } catch(e) {
        console.log(e);
        res.sendStatus(500);
        }
    } else {
        try {
        let books = await db.books.getAll();
        res.json(books);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
        }
    }
});

router.post('/', isAdmin, async (req, res, next) => {
    try {
        let title = req.body.title;
        let author = req.body.author;
        let price = req.body.price;
         res.json(await db.books.postBook(title, author, price));
    } catch (e) {
        console.log(e)
        res.sendStatus(500);
    }
});

router.put('/:id', isAdmin, async (req, res, next) => {
    try {
        let id = req.params.id;
        let title = req.params.title;
        let author = req.params.author;
        let price = req.params.price;
        res.json(await db.books.updateBook(id, title, author, price));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.delete('/:id', isAdmin, async (req, res, next) => {
    try {
        let id = req.params.id;
        res.json(await db.books.deleteBook(id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;