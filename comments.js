// Create web server
// 1. Use Node.js to create a web server
// 2. Use Express.js to create a web server
// 3. Use Express.js to create a web server

// 1. Use Node.js to create a web server
// 1.1 Create web server
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response) {
    console.log(request.method + ': ' + request.url);
    // 1.2 Read file
    var file = 'comments.json';
    fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        // 1.3 Set header
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 1.4 Set response
        response.end(data);
    });
});

server.listen(8080);
console.log('Server is running at http://' + server.address().address + ':' + server.address().port);