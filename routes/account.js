var express = require('express'),
    router = express.Router(),
    controller = require('../controllers/account');

router.post('/account/authenticate',controller.authenticate);

module.exports = router;
