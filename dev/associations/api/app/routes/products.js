const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/:id', (req, res) => {
  res.send(`Hello ${req.params.id}!`);
});

router.post('/', (req, res) => {
  res.send(`Hello ${req.body.id}!`);
});

router.put('/:id', (req, res) => {
  res.send(`Hello ${req.params.id}!`);
});

router.delete('/:id', (req, res) => {
  res.send(`Hello ${req.params.id}!`);
});

module.exports = router;
