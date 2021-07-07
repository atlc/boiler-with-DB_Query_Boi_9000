import { Router } from "express";
import users from "../../db/queries/users";
import { validate } from '@atlc/hibp';
import { v4 as uuid } from "uuid";
import { hash, genSalt, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { jwtConfig } from '../../config';

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "You suck" });
  }

  try {
    const [user] = await users.getByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Error!" });
    }

    const isCorrectPassword = await compare(password, user.password);
    
    if (isCorrectPassword) {
      const token = sign({ id: user.id, role: 'user' }, jwtConfig.secret, { expiresIn: jwtConfig.expiration });
      res.status(200).json({ message: "Successfully logged in!", token });
    } else {
      res.status(401).json({ message: "That email/password combination is incorrect." });
    }

  } catch (error) {
    res.status(500).json({ message: "Error", error });
  }
});

export default router;
