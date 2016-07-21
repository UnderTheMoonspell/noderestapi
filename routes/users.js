var express = require('express'),
    router = express.Router(),
    controller = require('../controllers/users');

router.get('/users',controller.getUsers);
router.get('/users/:id',controller.getById);
router.get('/users/:name',controller.getByName);

module.exports = router;
