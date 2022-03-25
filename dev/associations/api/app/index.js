const express = require('express');
const app = express();

const materialsRouter = require('./routes/materials');
const productsRouter = require('./routes/products');
const categoriesRouter = require('./routes/categories');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/materials', materialsRouter);
app.use('/products', productsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
