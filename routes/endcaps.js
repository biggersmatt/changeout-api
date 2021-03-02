const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/api/endcaps'

// Endcap Routes
router.get('/', controllers.endcaps.index);
router.get('/:id', controllers.endcaps.show);
router.post('/', controllers.endcaps.create);
router.post('/:id', controllers.endcaps.update);
router.delete('/:id', controllers.endcaps.destroy);