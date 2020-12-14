const { log } = require('debug');
var express = require('express');
var router = express.Router();

let formidable = require("formidable");

let usersList = require('./usersList') //! як перенести в іншу теку?

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'users',
    usersList,
  })
});

router.get('/add', function(req, res, next) {
  res.render('newUser', {
    title: 'New user',
  })
});

// 1
// router.use(express.static(__dirname+'/public')); 
 
// router.get("/data",function (req,res) { 

//   console.log(req.query.userName); 
//   console.log(req.query.userYearsOld); 
//   res.end(`Name: ${req.query.userName} \n TO: ${req.query.userYearsOld}`);

 
// }); 
 
 

// 2
router.post('/data', function (req, res) {

  var form = new formidable.IncomingForm();

  var filesCount = 0;
  form.parse(req, function (err, fields, files) {
      //Аналіз полів
      console.log(`userName - ${fields.userName}`);
      console.log(`userYearsOld - ${fields.userYearsOld}`);
      console.log(`userFavMov - ${fields.userFavMov}`);
  }).on('fileBegin', function (name, file) { //Аналіз подій 
      console.log(file);
      file.path = __dirname + '/uploads/' + file.name;
      filesCount++;
  });
  form.on('file', function (name, file) {
      console.log('Uploaded ' + file.name);
  });
  form.on('end', function () {
      res.end('Uploaded file' + filesCount);
  });
});


router.get('/remove/:id', function(req, res, next) {
  res.send('Видалення користувача :id');
});

router.get('/:id', function(req, res, next) {
  const resArr = req.url.split('/')
  res.render('user', {
    title: 'User',
    usersList,
    id: resArr[1] - 1,
  });
});

module.exports = router;
