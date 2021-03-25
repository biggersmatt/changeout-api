const router = require('express').Router();
const controllers = require('../controllers');

// Current Path = '/api/users'


router.post('/signup', controllers.users.create)
router.post('/login', controllers.users.login)
router.get('/logout', controllers.users.logout)
router.delete('/:id', controllers.users.destroy)

module.exports = router;