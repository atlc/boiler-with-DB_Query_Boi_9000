import { RequestHandler } from "express";
import { authenticate } from 'passport';
import { RequestWithUser } from "../../types";

export const isAdmin: RequestHandler = (req: RequestWithUser, res, next) => {
  authenticate('jwt', (err, user, info) => {
    if (err) return res.status(401).json({ message: "An unknown error occurred.", error: err});
    if (info) return res.status(401).json({ message: "An unknown error occurred.", error: info.message });

    if (!user) return res.status(500).json({ message: "This shouldn't happen lmao"});
    req.user = user;
    
    if (req.user.role !== 'admin') {
      return res.status(403).json({ 
        message: "You do not have sufficient permissions to access this resource",
        your_role: req.user.role,
        required_role: 'admin'
      });
    } else {
      next();
    }
  })(req, res, next);
}

