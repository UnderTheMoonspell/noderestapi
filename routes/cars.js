var express = require('express'),
    router = express.Router(),
    controller = require('../controllers/cars');

router.get('/cars',controller.getCars);
router.get('/cars/:id',controller.getById);

module.exports = router;
