import { Router } from "express";
import { validate } from '@atlc/hibp';
import { v4 as uuid } from "uuid";
import { hash, genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { authenticate } from 'passport';
import users from "../../db/queries/users";
import { jwtConfig } from '../../config';
import { RequestWithUser } from "../../../types";

const router = Router();

router.post("/register", async (req, res) => {
  const id = uuid();
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "You suck" });
  } else {
    try {

      const { isPwned, breaches } = await validate(password);

      if (isPwned) {
        return res.status(400).json({ message: `Whoa, your password has been found in ${breaches.toLocaleString()} breaches!`});
      }

      const salt = await genSalt(14);
      const hashed = await hash(password, salt);
      const created = await users.register(id, email, hashed);
      if (created.affectedRows === 1) {
        res.status(201).json({ message: "User was successfully created!" });
      } else {
        res
          .status(500)
          .json({ message: "User was not created for an unknown reason." });
      }
    } catch (error) {
      res.status(500).json({ message: "Uh oh, we made a fucky wucky", error });
    }
  }
});

router.post("/login", authenticate('local'), async (req: RequestWithUser, res) => {

  const token = sign({ id: req.user.id, role: 'user' }, jwtConfig.secret, { expiresIn: jwtConfig.expiration });
  res.json({ message: "Success!", token });
});

export default router;
