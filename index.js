const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hello World from Port ${port}`);
});

app.listen(port, () =>{
    console.info(`Database is running on port ${port}`);
});

app.get('/myname', (req, res) => {
    const name = 'Valeria'; // Reemplaza 'Tu nombre' con tu nombre real
    res.send(`Hello World! My name is ${name}`);
});

