var express = require('express');
var router = express.Router();
formidable = require('formidable') // модуль для роботи з формами (треба окремо встановити)
const { v4: uuidv4 } = require('uuid') // модуль для генерації унікальних id

// перехід на сторінку з формою для додавання кінотеатру
// /autors/new
router.get("/new", function (req, res, next) {
  res.render("new-autor-form", {
    title: "Add a new autor",
  });
});

// редагування
router.get("/:id", function (req, res, next) {
  const autor = req.autors_db.getItemById(req.params.id);
  res.render("edit-autor-form", {
    title: "Edit autor",
    autor,
  });
});

//* /autors - весь список кінотеатрів
router.get('/', function(req, res, next) {
  const autorsList = req.autors_db.load() // завантажуємо кінотеатри з JSON файлу (./autor/data/autors.json)
  //* метод load() описаний в db/index.js
  res.render('autors', {
    title: 'autors',
    autorsCount: autorsList.length,
    autorsList
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

    req.autors_db.addItem({
      id: uuidv4(),
      name: fields.name,
      surname: fields.surname,
      img: files.img.name,
    });
    res.redirect("/autors");
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

    req.autors_db.updateItem({
      id: req.params.id,
      name: fields.name,
      surname: fields.surname,
      img: files.img.name,
    });
    res.redirect("/autors");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

router.get("/delete/:id", function (req, res, next) {
  // console.log("delete----" + req.params.id);
  req.autors_db.delItem(req.params.id);
  res.redirect("/autors");
});

module.exports = router;
