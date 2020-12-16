var express = require('express');
var router = express.Router();
formidable = require('formidable') // модуль для роботи з формами (треба окремо встановити)
const { v4: uuidv4 } = require('uuid') // модуль для генерації унікальних id

// перехід на сторінку з формою для додавання кінотеатру
// /books/new
router.get("/new", function (req, res, next) {
  const autorsList = req.autors_db.load()
  res.render("new-book-form", {
    title: "Add a new book",
    autorsList
  });
});

// редагування
router.get("/:id", function (req, res, next) {
  const book = req.books_db.getItemById(req.params.id);
  const autorsList = req.autors_db.load()
  res.render("edit-book-form", {
    title: "Edit book",
    book,
    autorsList
  });
});

//* /books - весь список кінотеатрів
router.get('/', function(req, res, next) {
  const booksList = req.books_db.load() // завантажуємо кінотеатри з JSON файлу (./book/data/books.json)
  //* метод load() описаний в db/index.js
  res.render('books', {
    title: 'books',
    booksCount: booksList.length,
    booksList
  });
});

// відсилаємо дані для додавання кінотеатру
router.post("/data", function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = req.uploaded_images_path;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.send("Error");
      return;
    }
    req.books_db.addItem({
      id: uuidv4(),
      title: fields.title,
      year: fields.year,
      genre: fields.genre,
      img: files.img.name,
    });
    res.redirect("/books");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

// відсилаємо дані для оновлення кінотеатру
router.post("/update/:id", function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = req.uploaded_images_path;

  // const autorsList = req.autors_db.load()

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.send("Error");
      return;
    }

    req.books_db.updateItem({
      id: req.params.id,
      title: fields.title,
      year: fields.year,
      genre: fields.genre,
      img: files.img && files.img.name,
    });
    res.redirect("/books");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

router.get("/delete/:id", function (req, res, next) {
  // console.log("delete----" + req.params.id);
  req.books_db.delItem(req.params.id);
  res.redirect("/books");
});

module.exports = router;
