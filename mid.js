const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv').config();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use(cors());


app.get('/', (req, res) => {
    res.status(200).json({
        name: 'mocode_ecomly_server',
        version: '1.0.0',
        description: 'This is a server for ecomly project'
    });
});   

const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

app.listen(port, hostname, () => {
    console.log(`Server is running on ${hostname}:${port}`);
}); 