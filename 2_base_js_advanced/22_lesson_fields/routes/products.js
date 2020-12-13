var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
formidable = require("formidable");
var util = require("util");

const products = [
  {
    id: "1",
    title: "Чайник",
    price: 120,
  },
  {
    id: "2",
    title: "Холодильник",
    price: 15000,
  },
  {
    id: "3",
    title: "Праска",
    price: 7000,
  },
];

/* GET users listing. */
//---- Products List
router.get("/", function (req, res, next) {
  res.render("products-list", {
    title: "Products",
    products,
  });
});

router.get("/shop", function (req, res, next) {
  res.send("Shops List");
});

router.get("/owner", function (req, res, next) {
  res.send("Owner info");
});
router.get("/new", function (req, res, next) {
  res.render("product-form", {
    title: "Products",
  });
});
router.post("/data", function (req, res, next) {
  console.log("------- 11111 -------");
  var form = new formidable.IncomingForm();
  form.uploadDir = __dirname + "/uploads/";
  console.log("------- 2222 -------");

  form.parse(req);

  var filesCount = 0;
  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    console.log(file);
    file.path = __dirname + "/uploads/" + file.name;
    filesCount++;
  });
  //Файл завантажено
  form.on("file", function (name, file) {
    console.log("Uploaded " + file.name);
  });
  //Закінчено завантаження усіх файлів
  form.on("end", function () {
    res.end("Uploaded file " + filesCount);
  });

  // res.send(`You sent : ${req.body.pTitle} :
  // ${req.body.pPrice} `);
});

module.exports = router;
