var express = require('express');
var router = express.Router();

const products = [
  {
    id:'1',
    title:'Чайник',
    price: 120
  },
  {
    id:'2',
    title:'Холодильник',
    price: 12200
  },
  {
    id:'3',
    title:'Телефон',
    price: 5478
  }
]

/* GET users listing. */
//Procts List
router.get('/', function(req, res, next) {
  res.render('products-list', {
    title: 'Products',
    products
  });
});
router.get('/shop', function(req, res, next) {
  res.send('Shops List');
});
router.get('/owner', function(req, res, next) {
  res.send('Owner Info');
});

module.exports = router;
