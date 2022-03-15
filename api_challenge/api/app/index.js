const express = require('express');
const app = express();
const usersRouter  = require('./routes/users');
const materialsRouter = require('./routes/materials');
const categoriesRouter = require('./routes/categories');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use('/users', usersRouter);
app.use('/materials', materialsRouter);
app.use('/categories', categoriesRouter);

module.exports = app;
