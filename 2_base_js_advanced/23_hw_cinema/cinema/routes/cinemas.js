var express = require('express');
var router = express.Router();
formidable = require('formidable') // модуль для роботи з формами (треба окремо встановити)
const { v4: uuidv4 } = require('uuid') // модуль для генерації унікальних id

//* /cinemas - весь список кінотеатрів
router.get('/', function(req, res, next) {
  const cinemasList = req.cinemas_db.load() // завантажуємо кінотеатри з JSON файлу (./cinema/data/cinemas.json)
  //* метод load() описаний в db/index.js
  res.render('cinemas', {
    title: 'Cinemas',
    cinemasCount: cinemasList.length,
    cinemasList
  });
});

// перехід на сторінку з формою для додавання кінотеатру
// /cinemas/new
router.get("/new", function (req, res, next) {
  res.render("new-cinema-form", {
    title: "Add a new cinema",
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

    req.cinemas_db.addItem({
      id: uuidv4(),
      title: fields.title,
      year: fields.year,
      address: fields.address,
      img: files.img.name,
    });
    res.redirect("/cinemas");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

module.exports = router;
