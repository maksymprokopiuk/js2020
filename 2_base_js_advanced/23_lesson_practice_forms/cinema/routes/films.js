var express = require("express");
var router = express.Router();
formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");

/* GET users listing. */
router.get("/new", function (req, res, next) {
  res.render("new-film-form", {
    title: "Add new film",
  });
});
router.get("/:id", function (req, res, next) {
  const film = req.films_db.getItemById(req.params.id);
  res.render("edit-film-form", {
    title: "Edit film",
    film,
  });
});

router.get("/", function (req, res, next) {
  const filmsList = req.films_db.load();
  res.render("films-list", {
    title: "Films",
    filmsCount: filmsList.length,
    filmsList,
  });
});

router.post("/data", function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = req.uploaded_images_path;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.send("Error");
      return;
    }

    req.films_db.addItem({
      id: uuidv4(),
      title: fields.title,
      year: fields.year,
      genre: fields.genre,
      poster: files.poster.name,
    });
    res.redirect("/films/");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

router.post("/update/:id", function (req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = req.uploaded_images_path;

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.send("Error");
      return;
    }

    req.films_db.updateItem({
      // id: fields.id,
      id: req.params.id,
      title: fields.title,
      year: fields.year,
      genre: fields.genre,
      poster: files.poster && files.poster.name,
    });
    res.redirect("/films/");
  });

  // Для події почату завантаження файлу (задаємо де збергти)
  form.on("fileBegin", function (name, file) {
    file.path = req.uploaded_images_path + "/" + file.name;
  });
});

router.get("/delete/:id", function (req, res, next) {
  console.log("delete----" + req.params.id);
  req.films_db.delItem(req.params.id);
  res.redirect("/films/");
});

module.exports = router;
