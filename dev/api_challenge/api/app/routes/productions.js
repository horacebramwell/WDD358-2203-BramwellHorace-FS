const router = require('express').Router();
const productionsCtrl = require('../controllers/productions');


// GET /productions
router.get('/', productionsCtrl.getAll);

// GET /productions/:id
router.get('/:id', productionsCtrl.getOne);

// POST /productions
router.post('/', productionsCtrl.create);

// PUT /productions/:id
router.put('/:id', productionsCtrl.update);

// DELETE /productions/:id
router.delete('/:id', productionsCtrl.delete);


module.exports = router;