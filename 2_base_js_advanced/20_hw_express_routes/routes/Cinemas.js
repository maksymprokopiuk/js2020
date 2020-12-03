var express = require('express');
var router = express.Router();

const cinemasList = [
  {
    id: '1',
    img: 'http://domion.info/uploads/gallery/0/0_4_636101831872612500.jpeg',
    title: 'Кінокомплекс «Доміон»',
    address: 'Україна, м.Ужгород, вул. Минайська, 40',
    site: 'http://domion.info/',
  },
  {
    id: '2',
    img: 'https://i.ibb.co/sC4crQF/v-cine-max-1.jpg',
    title: '3D кінотеатр «5 Елемент»',
    address: 'Україна, м.Ужгород, вул. Легоцького 19а (ТРЦ "TOKYO")',
    site: 'http://5element.uz.ua/',
  },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cinemas', {
    title: 'Cinemas',
    cinemasList
  });
});

module.exports = router;
