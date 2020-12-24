var express = require('express');
var router = express.Router();
 

router.get('/', function(req, res, next){
    res.render('index', {
      title: 'Home page',
      page: 'home/home',
    });
});

module.exports = router;
