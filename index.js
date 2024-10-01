const express = require('express');
const app = express();
const port = 3000;

const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
];

// Route to get all items
app.get('/items', (req, res) => {
    res.json(items);
});

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js RESTful API! Access /items to see the list of items.');
});

// Start the server
app.listen(port, () => {
    console.log(`API is running at http://localhost:${port}`);
});
