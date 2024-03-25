// loggerMiddleware.js

// Define a middleware function
const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Call next to move to the next middleware or route handler
};

module.exports = loggerMiddleware;
