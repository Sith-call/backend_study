var express = require('express');
var router = express.Router();
var userController = require('../controllers/users.controller.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', userController.userRegister);
router.post('/login', userController.userLogin);
router.get('/logout', userController.userLogout);

module.exports = router;
