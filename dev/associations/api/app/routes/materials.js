const router = require('express').Router();
const materialCtrl = require('../controllers/materials');

router.get('/', materialCtrl.getAll);
router.get('/:id', materialCtrl.getOne);
router.post('/', materialCtrl.create);
router.put('/:id', materialCtrl.update);
router.delete('/:id', materialCtrl.delete);

module.exports = router;
