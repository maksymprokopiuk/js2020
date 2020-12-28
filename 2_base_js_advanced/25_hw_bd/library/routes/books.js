var express = require('express');
var router = express.Router();
const Book = require('../db/books')
const Author = require('../db/authors')
// 1
const mongoose = require('mongoose')
// 2
mongoose.connect("mongodb://localhost:27017/authorsdb", { useNewUrlParser: true })
// 3 
// const Schema = mongoose.Schema
// 
// const booksSchema = new Schema({
//   title: String,
//   year: Number,
//   genre: String,
//   img: String,
//   author: String,
// })
// 4
// const Book = mongoose.model('Book', booksSchema) 

router.get('/add', function(req, res, next){
  const book = new Book({
    title: req.query.title,
    year: req.query.year,
    genre: req.query.genre,
    img: req.query.img,
    author: req.query.author,
  })
  book.save(function(err, item){
    // mongoose.disconnect()
    if(err) return res.status(500).json({err:{msg:'Saving failed'}})
    res.redirect('/books')
  })
})

// видалення доданої інформації
router.get('/delete/:id', function(req, res, next){
  Book.findByIdAndDelete({_id:req.params.id}, function(err, doc){
    // mongoose.disconnect()
    if(err) return res.status(500).json({err:{msg:'Deleting failed!'}})

    res.redirect('/books')
  })
})

/* GET home page. */
router.get('/', function(req, res, next) {
  Book.find({}, function(err, docs){
    // mongoose.disconnect();
    if(err) return res.status(500).json({err:{msg:"Fetch faild!"}})
    res.render('books', { title: 'Books', books: docs });
  })
});



router.get('/addform', function(req, res, next) {
  Author.find({}, function(err, docs){
    // mongoose.disconnect();
    if(err) return res.status(500).json({err:{msg:'Fetching author failed'}})
    res.render('books-add', { title: 'Add book', authors: docs});
  })
});

module.exports = router;
