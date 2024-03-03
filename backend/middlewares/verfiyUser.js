import jwt from "jsonwebtoken";
import { errorMiddleware } from "./errorMiddle.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorMiddleware(401, "You are not authenticated!"));

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(errorMiddleware(403, "Token is not valid!"));

    req.user = user;
    next();
  });
};
