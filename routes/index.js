var express = require('express'),
    router = express.Router(),
    carController = require('../controllers/cars'),
    accountController = require('../controllers/account'),
    userController = require('../controllers/users');

router.get('/', (req, res) => {
  res.send("home");
});

router.post('/account/authenticate',accountController.authenticate);

router.get('/cars',carController.getCars);
router.get('/cars/:id',carController.getById);

router.get('/users',userController.getUsers);
router.get('/users/:id',userController.getById);
router.get('/users/getbyname/:username',userController.getByName);

router.all('*', (req, res, next) => {
  console.log("main router");
  next();
});

module.exports = router