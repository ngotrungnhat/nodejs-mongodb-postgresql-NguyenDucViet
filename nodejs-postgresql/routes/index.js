var express = require("express");
var router = express.Router();
const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "demoPostgresql01",
  password: "1",
  port: 5432
});

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

/* GET view page */
router.get("/view", function(req, res, next) {
  pool.query("SELECT * FROM contact", (err, data) => {
    // console.log(err, data.rows)
    res.render("view", { title: "Hello Postgresql", dulieu: data.rows });
    // pool.end()
  });
});

/* GET add page. */
router.get("/add", function(req, res, next) {
  res.render("add", { title: "Add Data Posgresql" });
});
router.post("/add", function(req, res, next) {
  const name = req.body.name,
    age = req.body.age;
  pool.query(
    "INSERT INTO contact (name, age) VALUES ($1, $2)",
    [name, age],
    (err, data) => {
      // pool.end()
      res.redirect("/view");
    }
  );
});

/* GET update page */
router.get("/update/:id", function(req, res, next) {
  const idNeedUpdate = req.params.id;
  pool.query("SELECT * FROM contact WHERE id=($1)", [idNeedUpdate], function(
    err,
    data
  ) {
    res.render("update", { title: "Update", dulieu: data.rows });
  });
});
/* POST update page */
router.post("/update/:idNeedUpdate", function(req, res, next) {
  const idNeedUpdate = req.params.idNeedUpdate,
        name = req.body.name,
        age = req.body.age;
  pool.query(
    "UPDATE contact SET name=($1), age=($2) WHERE id=($3)",
    [name, age, idNeedUpdate],
    (err, data) => {res.redirect("/view");}
  );
  
});

/* GET delete page */
router.get("/delete/:id", function(req, res, next) {
  const idNeedDelete = req.params.id;
  pool.query("DELETE FROM contact WHERE id=($1) ", [idNeedDelete], function(
    err,
    data
  ) {
    res.redirect("/view");
  });
});

module.exports = router;
