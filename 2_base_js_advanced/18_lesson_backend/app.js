const http = require("http");
var fs = require("fs");
http.createServer(function (req, res) {
    const resArr = req.url.split("/");
    switch (resArr[1]) {
        case "":
            res.end("Home!");
            break;
        case "hello":
            res.end("Hi!");
            break;
        case "how":
            res.end("Ok!");
            break;
        case "bye":
            res.end("Wait!");
            break;
        case "file":
            fs.readFile(resArr[2], function (err, data) {
                // ---- ЯКЩО СТАЛАСЯ ПОМИЛКА ----
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end("На сервері помилка!");
                    return;
                }
                //------ ЯКЩО ПОМИЛКИ НЕ БУЛО -----
                res.writeHead(200, { "Content-Type": "text/html" });
                res.write(data);
                console.log("data");
                console.log(data);
                res.end();
            });
        default:
            // res.write("What???");
            break;
    }
    console.log(req.url);
    // res.end("Hello NodeJS!");
})
    .listen(5000, "127.0.0.1", function () {
        console.log("Сервер начал прослушивание запросов на порту 5000");
    });