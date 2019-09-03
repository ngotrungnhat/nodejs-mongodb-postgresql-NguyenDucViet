var express = require("express");
var router = express.Router();
const controller = require("./../controllers/friend.controller");

router.get("/add/:userId", controller.addFriend);

module.exports = router;
