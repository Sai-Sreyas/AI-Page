const fs = require('fs');
const http = require('http');

const server = http.createServer((req,res) => {
    const filePath = 'index.html';

    fs.readFile(filePath, (err, data) => {
        if(err) {
            res.statusCode = 404;
            res.end("File not found");
        }
        else{
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    });
});

server.listen(8080);
console.log('Server started on port 8080');

