var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const convert_idToObjecId = require("mongodb").ObjectID;
// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "contact";

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET add data. */
router.get("/add", function(req, res, next) {
  res.render("add", { title: "Add Data" });
});

/* INSERT A DOCUMENT */
router.post("/add", function(req, res, next) {
  const dataAdd = {
    name: req.body.name,
    phone: req.body.phone
  };
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
    const collection = db.collection("user");
    // Insert some documents
    collection.insertOne(dataAdd, function(err, result) {
      assert.equal(err, null);
      console.log("Inserted 1 documents into the collection");
      callback(result);
    });
  };

  res.redirect("/view");
});

/* FIND ALL DOCUMENTS */
router.get("/view", function(req, res, next) {
  const findDocuments = function(db, callback) {
    const collection = db.collection("user");
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  };
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    findDocuments(db, function(data) {
      res.render("view", { title: "View Data", dulieu: data });
      client.close();
    });
  });
});

/* REMOVE A DOCUMENT */
router.get("/delete/:idNeedDelete", function(req, res, next) {
  const idNeedDelete = convert_idToObjecId(req.params.idNeedDelete);
  console.log("idNeedDelete", idNeedDelete);
  // Hàm xoá
  const removeDocument = function(db, callback) {
    const collection = db.collection("user");
    collection.deleteOne({ _id: idNeedDelete }, function(err, result) {
      assert.equal(err, null);
      console.log("Xoá thành công");
      callback(result);
    });
  };

  // Kết nối server và gọi hàm xoá
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    removeDocument(db, function() {
      client.close();
    });
    res.redirect("/view");
  });
});

/* UPDATE A DOCUMENT */
router.get("/update/:idNeedUpdate", function(req, res, next) {
  const idNeedUpdate = convert_idToObjecId(req.params.idNeedUpdate);
  console.log("idNeedUpdate", idNeedUpdate);
  //res.render("index", { title: "Express" });
  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection("user");
    // Find some documents
    collection.find({ _id: idNeedUpdate }).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  };

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    findDocuments(db, function(data) {
      res.render("update", { title: "View Data", dulieu: data });
      client.close();
    });
  });
});

router.post("/update/:idNeedUpdate", function(req, res, next) {
  const idNeedUpdate = convert_idToObjecId(req.params.idNeedUpdate);
  const dataUpdate = {
    name: req.body.name,
    phone: req.body.phone
  };
  console.log("idNeedUpdate", idNeedUpdate);
  console.log("dataUpdate", dataUpdate);

  const updateDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection("user");
    // Update document where a is 2, set b equal to 1
    collection.updateOne({ _id: idNeedUpdate }, { $set: dataUpdate }, function(
      err,
      result
    ) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
  };

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);

    updateDocument(db, function() {
      client.close();
    });
  });
  res.redirect("/view");
});

module.exports = router;
