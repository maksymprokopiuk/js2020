var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const filmsList = req.films_db.load()
  res.render('films-list', {
    title: 'Films',
    filmsCount: filmsList.length,
    filmsList
  });
});

module.exports = router;
