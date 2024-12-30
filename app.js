//The require function is used in Node.js to import modules.
//It loads the express module, which is a popular framework for building web applications in Node.js.
//Why use const?
//const ensures that the reference to the express module cannot be reassigned, maintaining the integrity of your code.
//The express() function is used to create an instance of an Express application.

//import express
const express = require('express');

//The dotenv module doesn't export an app or function to use directly. Instead, it provides a config() function that is used to set up your environment variables.
//import dotenv
require('dotenv').config();

//create express app
const app = express();

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';
const db_name = process.env.DB_NAME;

//middleware application level or global middleware, this function is executed for every request
app.use((req, res, next) => {
    console.log(req.method, req.url);
    console.log("Golbal Middleware");
    next();
});

//middleware application level or global middleware, this function is executed for every request
app.use((req, res, next) => {
    console.log("Golbal Middleware 2");
    next();
});

const logger = (req, res, next) => {
    const isUsed = false;
    if (isUsed) {
        console.log("is Used");
        return next();
    } else {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }           
};

// test route middleware
app.get('/t/:id', logger, (req, res) => {
    return res.status(200).send('test');
});

//adding routes
app.get('/', (req, res) => {
    res.status(404).send('No page!');
    return res;
});
//send html response
app.get('/test2', (req, res) => {
    return res.status(200).send('<h1>Hello World in NodeJS and Express!</h1>');
});
//adding routes to test request
app.get('/test/:id', (req, res) => {
    return res.status(200).send(`request id ${req.params.id}`);
});
// adding routes to response json
app.get('/test2/:id', (req, res) => {
    return res.status(200).json({
        id: req.params.id,
        name: 'test2'
    });
});

//listen to port and hostname
app.listen(port, hostname, () => {
    console.log(`Server is running on port ${port} and hostname ${hostname} and database ${db_name}`);
});
