// Create web server
// Use express to simplify server creation
const express = require('express');
// Create express app
const app = express();
// Use port 3000 unless one is set in the env
const port = process.env.PORT || 3000;
// Use the express.static built-in middleware function to serve static files
app.use(express.static('public'));
// Use the express.json built-in middleware function to parse json
app.use(express.json());
// Use the express.urlencoded built-in middleware function to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));
// Import the comments router
const comments = require('./comments');
// Add the comments router to the app
app.use('/api/comments', comments);
// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));

