const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/endcaps'

router.get('/', controllers.endcaps.index);
router.get('/:id', controllers.endcaps.show);
router.post('/', controllers.endcaps.create);
router.put('/:id', controllers.endcaps.update);
router.delete('/:id', controllers.endcaps.destroy);

module.exports = router;