var express = require("express");
//1
var cookieParser = require("cookie-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
//2
app.use(cookieParser("My Top Secret String"));

app.get("/", function (req, res) {
  // Cookies that have not been signed
  console.log("Cookies: ", req.cookies);

  if (req.cookies.userName) res.send("Hello " + req.cookies.userName);
  else res.redirect("loginForm.html");
});
//----------------------------------------------------
bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/login", urlencodedParser, function (req, res) {
  res.cookie("userName", req.body.username);
  res.cookie("test", "123");
  res.redirect("/");
});

app.get("/logout", function (req, res) {
  if (req.cookies.userName) {
    res.clearCookie("userName");
  }
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Listen 3000");
});
