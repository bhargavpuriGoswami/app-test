const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello, World!' });
});

app.post('/post', (req, res) => {
    const data  = req.body.data;
    if (data) {
        res.status(201).json({ received: data });
    } else {
        res.status(400).json({ error: 'No data provided' });
    }
});

module.exports = app;