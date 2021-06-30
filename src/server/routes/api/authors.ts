import { Router } from 'express';
import authors from '../../db/queries/authors';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const pizza_party = await authors.all();
        res.json(pizza_party);
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

router.post('/search', async (req, res) => {
    try {
        const { value } = req.body;
        const foundAuthors = await authors.search(value);
        res.json(foundAuthors);
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

router.put('/', async (req, res) => {
    try {
        const { email, id } = req.body;
        const db_response = await authors.update(email, id);
        if (db_response.affectedRows === 1) {
            res.json({ message: "The user was updated successfully!" });
        } else {
            res.status(404).json({ message: `The user with id #${id} was not found`})
        }
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        await authors.destroy(id);
        res.json({ message: "The user was deleted successfully" });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

export default router;