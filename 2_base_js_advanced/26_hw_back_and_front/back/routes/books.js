var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mystoredb", { useNewUrlParser: true })

const Schema = mongoose.Schema;

const bookScheme = new Schema({
    title: String,
    price: Number
});

const Book = mongoose.model("Books", bookScheme);

router.get('/', function(req, res, next) {
  res.send('BOOKS');
});

// localhost:3000/books/add
router.get('/add', function (req, res, next) {
  const book = new Book({
    title: req.query.title,
    price: req.query.price
  });

  book.save(function (err, prod) {
    if (err) return res.status(500).json({ err: { msg: "Saving faild!" } })
    res.status(200).json({ msg: "Saving is good!" })
    mongoose.disconnect();
  });
});

module.exports = router;
