var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    const resArr = req.url.split('/');
    
    switch (resArr[1]) {
        case '':
            fs.readFile('home.html', function (err, data) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end("На сервері помилка!");
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
            break;
        case 'music':
            fs.readFile(`${resArr[1]}.html`, function (err, data) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end("На сервері помилка!");
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
            break;
        case 'coffee':
            fs.readFile(`${resArr[1]}.html`, function (err, data) {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end("На сервері помилка!");
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            });
            break;
    
        default:
            break;
    }
    // console.log(`resArr[1] - ${resArr[1]}`);
    // console.log(`resArr[2] - ${resArr[2]}`);
    // console.log(req.url);
}).listen(3000, "127.0.0.1", function () {
    console.log("Сервер почав прослуховування запитів на порту 3000");
});