// app.js

const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import the middleware

const app = express();

// Use the middleware
app.use(loggerMiddleware);

// Your other route handlers and middleware

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
