import { Router } from 'express';

import db from '../../db';

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        let categories = await db.categories.getCatorgories();
        res.json(categories);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:id?', async (req, res, next) => {
    try {
        let id = req.params.id;
        let [category] = await db.categories.getOneCatorgories(id);
        res.json(category);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

export default router;