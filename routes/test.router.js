var express = require('express');
var router = express.Router();
var testController = require('../controllers/test.controller.js');

router.get('/cookie', testController.cookieTest);
router.get('/session', testController.sessionTest);

module.exports = router;