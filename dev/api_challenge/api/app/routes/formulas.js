const router = require('express').Router();
const formulasCtrl = require('../controllers/formulas');


// GET /formulas
router.get('/', formulasCtrl.getAll);

// GET /formulas/:id
router.get('/:id', formulasCtrl.getOne);

// POST /formulas
router.post('/', formulasCtrl.create);

// PUT /formulas/:id
router.put('/:id', formulasCtrl.update);

// DELETE /formulas/:id
router.delete('/:id', formulasCtrl.delete);


module.exports = router;