const router = require('express').Router();
const categoryCtrl = require('../controllers/categories');

router.get('/', categoryCtrl.getAll);
router.get('/:id', categoryCtrl.getOne);
router.post('/', categoryCtrl.create);
router.put('/:id', categoryCtrl.update);
router.delete('/:id', categoryCtrl.delete);

module.exports = router;
