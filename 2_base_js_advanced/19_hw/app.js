const express = require("express");
const os = require('os') // для вивода імені користувача

let app = express();

// 1 обробка статичних маршрутів
app.get("/",
    function (req, res, next) {
        req.user = os.userInfo().username;
        next()
    },
    function (req, res) {
        res.send(`Hello ${req.user}`)
    }
);
app.get("/goals",
    function (req, res) {
        res.send('Our goals');
    }
);

// 3 обробка параметрів запитів
app.use(express.static(__dirname + "/public"));

app.get('/:name', function (req, res, next) {
    var options = {
        root: __dirname + '/public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    var fileName = req.params.name;
    res.sendFile(fileName + '.html', options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});


app.listen(3000, function () {
    console.log("listen 3000");
});
