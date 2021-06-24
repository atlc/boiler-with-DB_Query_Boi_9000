import { Router } from 'express';
import authors from '../db/queries/authors';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const allAuthors = await authors.all();
        res.json(allAuthors);
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [singleAuthor] = await authors.single_author(id);
        res.json(singleAuthor);
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        const newUser = req.body;
        const db_response = await authors.create(newUser);
        res.json({
            message: "The new user was added successfully!",
            id_lmao: db_response.insertId
        });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

export default router;