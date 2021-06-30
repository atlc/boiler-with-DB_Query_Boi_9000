import { Router } from 'express';
import posts from '../../db/queries/posts';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const pizza_party = await posts.all();
        res.json(pizza_party);
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const [singlePost] = await posts.single_post(id);
        res.json(singlePost);
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.post('/search', async (req, res) => {
    try {
        const { value } = req.body;
        const foundposts = await posts.search(value);
        console.log(`Posts found: ${foundposts.length}`);
        res.json(foundposts);
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.post('/', async (req, res) => {
    try {
        const newpost = req.body;
        const db_response = await posts.create(newpost);
        res.json({
            message: "The new post was added successfully!",
            id_lmao: db_response.insertId
        });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.put('/', async (req, res) => {
    try {
        const { content, id } = req.body;
        const db_response = await posts.update(content, id);
        if (db_response.affectedRows === 1) {
            res.json({ message: "The post was updated successfully!" });
        } else {
            res.status(404).json({ message: `The post with id #${id} was not found` })
        }
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        await posts.destroy(id);
        res.json({ message: "The post was deleted successfully" });
    } catch (error) {
        console.log(error.sqlMessage);
        res.status(500).json({ error });
    }
});

export default router;