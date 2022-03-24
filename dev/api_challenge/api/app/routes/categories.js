const router = require('express').Router();
const categoriesCtrl = require('../controllers/categories');

// GET /categories
router.get('/', categoriesCtrl.getAll);

// GET /categories/:id
router.get('/:id', categoriesCtrl.getOne);

// POST /categories
router.post('/', categoriesCtrl.create);

// PUT /categories/:id
router.put('/:id', categoriesCtrl.update);

// DELETE /categories/:id
router.delete('/:id', categoriesCtrl.delete);


module.exports = router;