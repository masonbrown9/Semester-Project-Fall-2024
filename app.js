const express = require('express');
const path = require('path'); 
const app = express();
const port = 3000;


app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/pages', express.static(path.join(__dirname, 'pages')));


app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


app.post('/submit-form', (req, res) => {
    const username = req.body.username;
    res.send(`Username is ${username}`);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});