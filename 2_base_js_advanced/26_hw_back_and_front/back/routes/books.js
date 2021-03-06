var express = require('express');
var router = express.Router();
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mystoredb", { useNewUrlParser: true })

const Schema = mongoose.Schema;

const bookScheme = new Schema({
    title: String,
    picture: String,
    price: Number
});

const Book = mongoose.model("Books", bookScheme);

// ALL BOOKS localhost:3000/books
router.get('/', function(req, res, next) {
  Book.find({}, function(err, docs){
    if(err) return res.status(500).json({err: {msg: 'Fetch failed!'}})
    res.status(200).json({books: docs})
    // mongoose.disconnect()
  })

});

// ADD BOOK localhost:3000/books/add
router.get('/add', function (req, res, next) {
  const book = new Book({
    title: req.query.title,
    picture: req.query.picture,
    price: req.query.price
  });

  book.save(function (err, prod) {
    if (err) return res.status(500).json({ err: { msg: "Saving failed!" } })
    res.status(200).json({ msg: "Saving is good!" })
    // mongoose.disconnect();
  });
});

// DELETE BOOK localhost:3000/books/delete/5feb67b17164e130a80ae754
router.get('/delete/:id', function (req, res, next){
  
  Book.findOneAndDelete({_id: req.params.id}, function (err, doc) {
    if(err) return res.status(500).json({err:{msg: 'Deleting failed!'}})
    res.status(200).json({ msg: "Deleting is good!" })
    // mongoose.disconnect();
  })
})

// EDIT BOOK localhost:3000/books/edit/5feb67b17164e130a80ae754
router.get('/edit/:id', function(req, res, next){
  Book.updateOne({_id: req.params.id}, {
    title: req.query.title,
    picture: req.query.picture,
    price: req.query.price
  }, function(err, result){
    if(err) return res.status(500).json({err: {msg: 'Editing failed!'}})
    res.status(200).json({ msg: 'Editing is good!'})
    // res.status(200).json({ msg: result})
    // mongoose.disconnect()
  })
})

module.exports = router;
