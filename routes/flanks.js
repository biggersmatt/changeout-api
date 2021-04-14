const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/flanks'

// Endcap Routes
router.get('/', controllers.flanks.index);
router.get('/:id', controllers.flanks.show);
router.post('/', controllers.flanks.create);
router.put('/:id', controllers.flanks.update);
router.delete('/:id', controllers.flanks.destroy);

module.exports = router;