var express = require("express");
var router = express.Router();
var multer = require("multer");
const mongoose = require('mongoose');

const Images = []
const productModel = require('../model/product')

mongoose.connect('mongodb://localhost:27017/webproduct', {useNewUrlParser: true});

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./image-product");
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
var upload = multer({ storage: storage });

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* POST uploadImage page. */
router.post("/upload-image", upload.any(), function(req, res, next) {
  const tempImage = req.files[0].path
  Images.push(tempImage)
  res.status(200).send(req.files);
});

/* POST upload name & price */
router.post('/view', function (req, res, next) {
  const name = req.body.name,
        price = req.body.price
  const dataUpload = {
    name: name,
    price: price,
    image: Images
  }
  const dulieu = new productModel(dataUpload)
  dulieu.save();
  res.redirect('view')
})

/* GET view product */
router.get('/view', function (req, res, next) {
  productModel.find({ /* condition */ }, (err, data) => {
    console.log('data', data)
    res.render('view', {title: 'View Product', dulieu: data})
  })
})
module.exports = router;
