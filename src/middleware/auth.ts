import asyncHandler from "./async";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";

const jwt = require('jsonwebtoken');

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;
    console.log('headers', req.headers);
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Set token from Bearer token in header

        token = req.headers.authorization.split(' ')[1].trim();
        console.log('token ', token)
        // Set token from cookie
    }
    // Make sure token exists
    if (!token) {
        return next(new UserNotAuthorizedException('Not authorized to access this route'));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET.trim(),{ algorithms: ['HS512'] });
        console.log('user = ', decoded.sub)
        req.user = decoded.sub;
        next();
    } catch (err) {
        console.log(err)
        return next(new UserNotAuthorizedException('Not authorized to access this route'));
    }
});

export default protect;
