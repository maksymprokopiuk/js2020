var express = require('express');
var router = express.Router();
const Author = require('../db/authors')
// 1
const mongoose = require('mongoose')
// 2
mongoose.connect("mongodb://localhost:27017/authorsdb", { useNewUrlParser: true })
// 3 
// const Schema = mongoose.Schema
// 
// const authorsSchema = new Schema({
//   name: String,
//   born: String,
//   genre: String,
//   img: String
// })
// 4
// const Author = mongoose.model('Author', authorsSchema)

router.get('/add', function(req, res, next){
  const author = new Author({
    name: req.query.name,
    born: req.query.born,
    genre: req.query.genre,
    img: req.query.img
  })
  author.save(function(err, item){
    // mongoose.disconnect()
    if(err) return res.status(500).json({err:{msg:'Saving failed'}})
    res.redirect('/authors')
  })
})

// видалення доданої інформації
router.get('/delete/:id', function(req, res, next){
  Author.findByIdAndDelete({_id:req.params.id}, function(err, doc){
    // mongoose.disconnect()
    if(err) return res.status(500).json({err:{msg:'Deleting failed!'}})

    res.redirect('/authors')
  })
})

router.get('/', function(req, res, next) {
  Author.find({}, function(err, docs){
    // mongoose.disconnect();
    if(err) return res.status(500).json({err:{msg:"Fetch faild!"}})
    res.render('authors', { title: 'Authors', authors: docs });
  })
});


router.get('/addform', function(req, res, next) {
  res.render('authors-add', { title: 'Add author' });
});

module.exports = router;
