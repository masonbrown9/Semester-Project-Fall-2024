const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;

// Set up middleware to interact with my static files within the root folder (pages/images).
app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));


app.use(express.urlencoded({ extended: true }));

// access index.html from client side
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Form submission from client routed to server
app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Username is ${username}`);
});

// Creates a local host to view web page
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});