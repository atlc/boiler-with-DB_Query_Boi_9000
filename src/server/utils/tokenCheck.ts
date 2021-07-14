import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { jwtConfig } from "../config";

export const makeSureTokenIsValid: RequestHandler = ((req, res, next) => {
    const headerz = req.headers;
    const jwt = headerz.authorization.split(' ')[1];
  
    try {
      const token = verify(jwt, jwtConfig.secret);
      next();
    } catch (error) {
      res.status(401).json(error);
    }
});



export const isAdmin: RequestHandler = ((req, res, next) => {
  const headerz = req.headers;
  const jwt = headerz.authorization.split(' ')[1];

  try {
    const token = verify(jwt, jwtConfig.secret);
    if (token.role === 'admin') {
      next();
    } else {
      res.status(401).json("YOU'RE NOT AN ADMIN");
    }
  } catch (error) {
    res.status(401).json(error);
  }
});

