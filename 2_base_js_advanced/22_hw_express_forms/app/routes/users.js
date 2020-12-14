const { log } = require('debug');
var express = require('express');
var router = express.Router();
let fs = require('fs')

let formidable = require("formidable");

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  let content = fs.readFileSync('users.json', 'utf-8')
  let usersList = JSON.parse(content)
  
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

let user
router.post('/data', function (req, res) {

  var form = new formidable.IncomingForm();
  var filesCount = 0;
  form.parse(req, function (err, fields, files) {
    user = {
      name: fields.userName,
      yearsOld: fields.userYearsOld,
    }
    let movies = fields.userFavMov.split(',')
      user.favouriteMovies = movies
    let content = fs.readFileSync('users.json', 'utf-8')
    let users = JSON.parse(content)
    var id = Math.max.apply(Math,users.map(function(o){return o.id;}))
    user.id = id+1;
    users.push(user);
    var data = JSON.stringify(users);
    fs.writeFileSync("users.json", data);
  }).on('fileBegin', function (name, file) { //Аналіз подій 
      console.log(file);
      file.path = __dirname + '/uploads/' + file.name;
      filesCount++;
      // console.log('file.path -----------' + file.path);
  });
  form.on('file', function (name, file) {
      console.log('Uploaded ' + file.name);
  });
  form.on('end', function () {
      // res.end('Uploaded file' + filesCount);
      res.redirect('/users')
  });
});


router.delete('/remove/:id', function(req, res, next) {
  console.log('delete--------------------');
  res.redirect('/users')
});

router.get('/:id', function(req, res, next) {
  let content = fs.readFileSync('users.json', 'utf-8')
  let usersList = JSON.parse(content)
  const resArr = req.url.split('/')
  res.render('user', {
    title: 'User',
    usersList,
    id: resArr[1] - 1,
  });
});

module.exports = router;
