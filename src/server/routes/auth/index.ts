import { Router } from 'express';
import users from '../../db/queries/users';
import { v4 as uuid } from 'uuid';
import { hash, genSalt } from 'bcrypt';

const router = Router();

router.post('/register', async (req, res) => {
    const id = uuid();
    const { email, password } = req.body;



    if (!email || !password) {
        res.status(400).json({ message: "You suck" });
    } else {
        try {
            const salt = await genSalt(14);
            const hashed = await hash(password, salt);
            const created = await users.register(id, email, hashed);
            if (created.affectedRows === 1) {
                res.status(201).json({ message: "User was successfully created!" });
            } else {
                res.status(500).json({ message: "User was not created for an unknown reason." });
            }
        } catch (error) {
            res.status(500).json({ message: "Uh oh, we made a fucky wucky", error })
        }
    }
});

export default router;