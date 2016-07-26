'use strict'
var express = require('express'),
    router = express.Router(),
    carController = require('../controllers/cars'),
    accountController = require('../controllers/account'),
    userController = require('../controllers/users'),
    authorizationMW = require('../middlewares/authorization');

//incluir os routes que se quer proteger com o token
router.use(['/cars', '/users'],authorizationMW.tokenVerification);

router.get('/', (req, res) => {
  res.send("home");
});

router.post('/account/authenticate',accountController.authenticate);

router.get('/cars',carController.getCars);
router.get('/cars/:id',carController.getById);

router.get('/users', authorizationMW.requireRole(['admin','user']), userController.getUsers);
router.get('/users/:id',userController.getById);
router.get('/users/getbyname/:username',userController.getByName);

router.all('*', (req, res, next) => {
  console.log("main router");
  next();
});

module.exports = router