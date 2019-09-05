var express = require('express');
var router = express.Router();
var controller = require('./../controllers/user.controller')

/* GET home api. */
router.get('/', controller.index);

module.exports = router;