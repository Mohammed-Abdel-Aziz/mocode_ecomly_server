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