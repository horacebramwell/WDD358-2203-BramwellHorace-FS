const router = require('express').Router();
const usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.getAll);

// GET /users/:id
router.get('/:id', usersCtrl.getOne);

// POST /users
router.post('/', usersCtrl.create);

// PUT /users/:id
router.put('/:id', usersCtrl.update);

// DELETE /users/:id
router.delete('/:id', usersCtrl.delete);

module.exports = router;
