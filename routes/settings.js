const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/api/settings'

// Settings Routes
router.get('/', controllers.settings.index);
router.post('/', controllers.settings.create);
router.put('/:id', controllers.settings.update);

module.exports = router;