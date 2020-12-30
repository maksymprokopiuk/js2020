var express = require("express");
var router = express.Router();
// port 1000 
//1.Імпортували модуль
const mongoose = require("mongoose");

//2. Встановлюємо з"єднання
mongoose.connect("mongodb://localhost:27017/userstoredb1", {
  useNewUrlParser: true,
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});

module.exports = router;
