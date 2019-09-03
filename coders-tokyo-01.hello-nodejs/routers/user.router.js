var express = require("express");
var router = express.Router();
const controller = require("../controllers/user.controllers");
const validate = require("./../validate/user.validate");

var multer = require("multer");
var upload = multer({ dest: "public/images" });

router.get("/", controller.users);

router.get("/search", controller.usersSearch);

router.get("/create", controller.userCreate);

router.post(
  "/create",
  upload.single("avatar"),
  validate.postCreate,
  controller.userPostCreate
);

module.exports = router;
