var express = require('express');
var router = express.Router();
const userModel = require('../model/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET view page. */
router.get('/view', function(req, res, next) {
  userModel.find({/* condition */}, function(err, data){
    res.json()
    // res.render('view', { title: 'view view', dulieu: data });
  })
});

/* GET Xoá document. */
router.get('/delete/:idNeedDelete', function(req, res, next) {
  const id = req.params.idNeedDelete
  userModel.findByIdAndRemove({_id: id}, {useFindAndModify: false}).exec();
  console.log('id', id)
  res.redirect('/view')
});

/* GET update page. */
router.get('/update/:idNeedUpdate', function(req, res, next) {
  const id = req.params.idNeedUpdate
  userModel.find({_id: id}, function(err, data){
    res.render('update', { title: 'update update', dulieu: data });
  })
});
/* POST update page. */
router.post('/update/:idNeedUpdate', function(req, res, next) {
  const id = req.params.idNeedUpdate
  const dataUpdate = {
    "name": req.body.name,
    "phone": req.body.phone
  }
  userModel.findOneAndUpdate({_id: id}, dataUpdate, {useFindAndModify: false}).exec();
  res.redirect('/view')
});

/* GET add page. */
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'addddddd' });
});
/* POST add page. */
router.post('/add', function(req, res, next) {
  const dataAdd = {
    "name": req.body.name,
    "phone": req.body.phone
  }
  const dulieu = new userModel(dataAdd)
  dulieu.save();
  res.redirect("/view")
});

module.exports = router;
