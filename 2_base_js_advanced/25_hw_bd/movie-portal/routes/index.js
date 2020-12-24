var express = require('express');
var router = express.Router();

// 1 підключити модуль
// const mongoose = require('mongoose')
// 2 встановлюємо з'єднання
// mongoose.connect('mongodb://localhost:27017/moviedb', {useNewUrlParser: true})
// 3 створення схеми
// const Schema = mongoose.Schema
// створення схеми моделі
// const movieScheme = new Schema({
//   img: String,
//   title: String,
//   countries: String,
//   year: Number,
//   genres: String,
//   description: String,
// })
// 4 створення моделі
// const Movie = mongoose.model('Movie', movieScheme)
 

router.get('/', function(req, res, next){
  // Вибірка всіх документів з бази
  // Movie.find({}, function(err, docs){
    // console.log('docs===============================');
    // console.log(docs);
    // mongoose.disconnect();
    // if(err) return res.status(500).json({err:{msg:"Fetch failed!"}})
    res.render('index', {
      title: 'Home page',
      page: 'home/home',
      // movies: docs,
    });
  // });
});

module.exports = router;
