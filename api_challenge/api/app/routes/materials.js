const router = require('express').Router();
const materialsCtrl = require('../controllers/materials');

// GET /materials
router.get('/', materialsCtrl.getAll);

// GET /materials/:id
router.get('/:id', materialsCtrl.getOne);

// POST /materials
router.post('/', materialsCtrl.create);

// PUT /materials/:id
router.put('/:id', materialsCtrl.update);

// DELETE /materials/:id
router.delete('/:id', materialsCtrl.delete);

module.exports = router;
