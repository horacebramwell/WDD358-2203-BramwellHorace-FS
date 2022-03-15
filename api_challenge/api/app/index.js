const express = require('express');
const app = express();
const usersRouter  = require('./routes/users');
const materialsRouter = require('./routes/materials');
const categoriesRouter = require('./routes/categories');
const formulasRouter = require('./routes/formulas');
const productionsRouter = require('./routes/productions');
const productsRouter = require('./routes/products');
const suppliersRouter = require('./routes/suppliers');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/users', usersRouter);
app.use('/materials', materialsRouter);
app.use('/categories', categoriesRouter);
app.use('/formulas', formulasRouter);
app.use('/productions', productionsRouter);
app.use('/products', productsRouter);
app.use('/suppliers', suppliersRouter);

module.exports = app;
