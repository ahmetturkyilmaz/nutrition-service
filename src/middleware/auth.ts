import asyncHandler from "./async";
import UserNotAuthorizedException from "../exception/UserNotAuthorizedException";

const jwt = require('jsonwebtoken');

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Set token from Bearer token in header
        token = req.headers.authorization.split(' ')[1];
        // Set token from cookie
    }
    // Make sure token exists
    if (!token) {
        return next(new UserNotAuthorizedException('Not authorized to access this route'));
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if (req.method == "POST") {
            req.body.createdBy = decoded;
        }
        next();
    } catch (err) {
        return next(new UserNotAuthorizedException('Not authorized to access this route'));
    }
});

export default protect;
