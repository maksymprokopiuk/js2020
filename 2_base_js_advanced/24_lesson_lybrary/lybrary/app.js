var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const autors_db = require('./db')(path.join(__dirname, 'data/autors.json'))
const books_db = require('./db')(path.join(__dirname, 'data/books.json'))

var indexRouter = require('./routes/index');
var autorsRouter = require('./routes/autors');
var booksRouter = require('./routes/books');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  req.data_path = path.join(__dirname, 'data')
  req.db_handler_path = path.join(__dirname, 'db')
  req.uploaded_images_path = path.join(__dirname, 'public/uploads')
  req.autors_db = autors_db
  req.books_db = books_db
  next()
})

app.use('/', indexRouter);
app.use('/autors', autorsRouter);
app.use('/books', booksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
