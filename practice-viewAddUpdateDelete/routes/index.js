var express = require("express");
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'contact';

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET add data. */
router.get("/add", function(req, res, next) {
  res.render("add", { title: "Add Data" });
});

/* POST Add Data. */
router.post("/add", function(req, res, next) {
  const dataAdd = {
    "name": req.body.name,
    "phone": req.body.phone
  }

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    insertDocuments(db, function() {
      client.close();
    });
  });

  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('user');
    // Insert some documents
    collection.insertOne(dataAdd ,function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 documents into the collection");
      callback(result);
    });
  }

  res.redirect("/view");
});

/* GET add data. */
router.get("/view", function(req, res, next) {
  
  const findDocuments = function(db, callback) {
    const collection = db.collection('user');
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  }

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
      findDocuments(db, function(data) {
        res.render("view", { title: "View Data", dulieu: data });
        console.log(data)
        client.close();
      });
  });

});

module.exports = router;
