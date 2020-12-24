var express = require('express');
var router = express.Router();

// 1 імпортувати модуль
const mongoose = require('mongoose')
// 2 встановлення з'єднання
mongoose.connect('mongodb://localhost:27017/moviedb', {useNewUrlParser: true})
// 3 схема
const Schema = mongoose.Schema
// створення схеми моделі
const movieScheme = new Schema({
  img: String,
  title: String,
  countries: String,
  year: Number,
  genres: String,
  description: String,
})
// 4 створення моделі
const Movie = mongoose.model('Movie', movieScheme)

// збереження доданої інформації
router.get('/save', function(req, res, next){
  // 5 створення документа
  const movie = new Movie({
    img: req.query.img,
    title: req.query.title,
    countries: req.query.countries,
    year: req.query.year,
    genres: req.query.genres,
    description: req.query.description,
  })
  // 6 збереження
  movie.save(function(err, mov){
    // mongoose.disconnect();  // від’єднання від бази даних
    if(err) return res.status(500).json({err:{msg:'Saving failed!'}})
    res.redirect('/movies')
  })
})

router.get('/', function(req, res, next) {
    Movie.find({}, function(err, docs){
    // mongoose.disconnect();
    if(err) return res.status(500).json({err:{msg:"Fetch failed!"}})
    res.render('index', {
      title: 'Movies page',
      page: 'movies/movies',
      movies: docs,
    });
  });
});

// перехід на сторінку з формою додовання фільму
router.get('/add', function(req, res, next) {
  res.render('index', {
    title: 'Add movie page',
    page: 'movies/add-movie',
  });
});

// видалення доданої інформації
router.get('/delete/:id', function(req, res, next){
  Movie.findByIdAndDelete({_id:req.params.id}, function(err, doc){
    // mongoose.disconnect()
    if(err) return res.status(500).json({err:{msg:'Deleting failed!'}})

    res.redirect('/movies')
  })
})

// пошук
router.get('/search', function(req, res, next){
  // Movie.find({title:{$regex:req.query.search}}, function(err, docs){
  Movie.find({title:{$regex:req.query.search, $options: 'i'}}, function(err, docs){
    // console.log('docs=================================');
    // console.log(docs);
    // console.log('req.query.search------------------------------------');
    // console.log(req.query.search);

    if(err) return res.status(500).json({err:{msg:"Search is failed!"}})
    
    res.render('index', {
      title: 'Search page',
      page: 'movies/movies',
      movies: docs,
    });
  })
})

// перехід на сторінку фільма
router.get('/:id', function(req, res, next){
  Movie.findById({_id:req.params.id}, function(err, doc){
    if(err) return res.status(500).json({err:{msg:'Find by ID is failed!'}})
    res.render('index', {
      title: 'Movie',
      page: 'movies/movie',
      movie: doc
    })
  })
})

module.exports = router;
