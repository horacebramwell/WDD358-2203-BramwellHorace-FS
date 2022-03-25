const express = require('express');
const app = express();

const materialsRouter = require('./routes/materials');
const productsRouter = require('./routes/products');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/materials', materialsRouter);
app.use('/products', productsRouter);

module.exports = app;
