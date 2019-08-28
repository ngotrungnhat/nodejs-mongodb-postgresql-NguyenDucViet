var express = require('express')
var router = express.Router()
const controller = require('../controllers/user.controllers')

router.get('/', controller.users)
router.get('/search', controller.usersSearch)
router.get('/create', controller.userCreate)
router.post('/create', controller.userPostCreate)

module.exports = router