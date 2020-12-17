var express = require('express');
var router = express.Router();
formidable = require('formidable') // модуль для роботи з формами (треба окремо встановити)
const { v4: uuidv4 } = require('uuid') // модуль для генерації унікальних id

// перехід на сторінку з формою для додавання кінотеатру
// /authors/new
router.get("/new", function (req, res, next) {
  res.render("new-author-form", {
    title: "Add a new author",
  });
});

// редагування
router.get("/:id", function (req, res, next) {
  const author = req.authors_db.getItemById(req.params.id);
  res.render("edit-author-form", {
    title: "Edit author",
    author,
  });
});

//* /authors - весь список кінотеатрів
router.get('/', function(req, res, next) {
  const authorsList = req.authors_db.load() // завантажуємо кінотеатри з JSON файлу (./author/data/authors.json)
  //* метод load() описаний в db/index.js
  res.render('authors', {
    title: 'authors',
    authorsCount: authorsList.length,
    authorsList
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

    req.authors_db.addItem({
      id: uuidv4(),
      name: fields.name,
      surname: fields.surname,
      img: files.img.name,
    });
    res.redirect("/authors");
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

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.send("Error");
      return;
    }

    req.authors_db.updateItem({
      id: req.params.id,
      name: fields.name,
      surname: fields.surname,
      img: files.img.name,
    });
    res.redirect("/authors");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

router.get("/delete/:id", function (req, res, next) {
  // console.log("delete----" + req.params.id);
  req.authors_db.delItem(req.params.id);
  res.redirect("/authors");
});

module.exports = router;
