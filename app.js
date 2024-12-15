//import express
const express = require('express');

//import dotenv
require('dotenv').config();

//create express app
const app = express();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';
const db_name = process.env.DB_NAME;

//listen to port and hostname
app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port} and hostname ${hostname} and database ${db_name}`);
});

//adding routes
app.get('/', (req, res) => {
    res.send('Hello World in NodeJS and Express!');
});
app.get('/test2', (req, res) => {
    res.send('Hello World in NodeJS and Express!');
});
//adding routes to test request
app.get('/test/:id', (req, res) => {
    res.send(`request id ${req.params.id}`);
});
// adding routes to response json
app.get('/test2/:id', (req, res) => {
    return res.json({
        id: req.params.id,
        name: 'test2'
    });
});

