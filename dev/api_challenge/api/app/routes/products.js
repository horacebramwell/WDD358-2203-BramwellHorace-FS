const router = require('express').Router();
const productsCtrl = require('../controllers/products');


// GET /products
router.get('/', productsCtrl.getAll);

// GET /products/:id
router.get('/:id', productsCtrl.getOne);

// POST /products
router.post('/', productsCtrl.create);

// PUT /products/:id
router.put('/:id', productsCtrl.update);

// DELETE /products/:id
router.delete('/:id', productsCtrl.delete);


module.exports = router;