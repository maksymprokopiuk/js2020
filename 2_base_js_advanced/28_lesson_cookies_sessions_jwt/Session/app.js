var express = require("express");
const path = require("path");
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();

app.use(cookieParser());
//app.use(session({secret: "Shh, its a secret!"}));
app.use(
  session({
    secret: "its a secret",
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
  })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  if (req.session.isNew || !req.session.products) {
    req.session.products = [];
    res.render("index", { title: "Корзина пуста", products: [] });
  } else {
    if (!req.session.products.length)
      res.render("index", { title: "Корзина пуста", products: [] });
    else
      res.render("index", { title: "Корзина", products: req.session.products });
  }
});
//---------------------------------------------
bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/addAuto", urlencodedParser, function (req, res) {
  req.session.products.push({ pr_type: "Auto", title: req.body.auto });
  res.redirect("/");
});

app.post("/addPhone", urlencodedParser, function (req, res) {
  req.session.products.push({ pr_type: "Phone", title: req.body.phone });
  res.redirect("/");
});
app.listen(3000, function () {
  console.log("Listen 3000");
});
