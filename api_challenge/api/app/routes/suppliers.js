const router = require('express').Router();
const suppliersCtrl = require('../controllers/suppliers');

// GET /suppliers
router.get('/', suppliersCtrl.getAll);

// GET /suppliers/:id
router.get('/:id', suppliersCtrl.getOne);

// POST /suppliers
router.post('/', suppliersCtrl.create);

// PUT /suppliers/:id
router.put('/:id', suppliersCtrl.update);

// DELETE /suppliers/:id
router.delete('/:id', suppliersCtrl.delete);


module.exports = router;