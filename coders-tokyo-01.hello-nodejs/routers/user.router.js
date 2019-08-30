var express = require('express')
var router = express.Router()
const controller = require('../controllers/user.controllers')
const validate = require('./../validate/user.validate')
const authRequire = require('./../middlewares/auth.middleware')

router.get('/', controller.users)

router.get('/search', controller.usersSearch)

router.get('/create', controller.userCreate)

router.post('/create', validate.postCreate, controller.userPostCreate)

module.exports = router