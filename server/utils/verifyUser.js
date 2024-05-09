import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
    if (!token) {
        return next(errorHandler(401, 'Unauthorized'));
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            console.error("Token verification error:", err);
            return next(errorHandler(401, 'Unauthorized'));
        }
        req.user = user;
        console.log("Decoded user from token:", user);
        next();
    });
};
