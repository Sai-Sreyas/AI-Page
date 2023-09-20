const fs = require("fs");
const http = require("http");

const server = http.createServer((req,res) => {
    const filePath = "index2.html";

    fs.readFile(filePath, (err,data) => {
        if(err){
            res.statusCode = 404;
            res.end("File not found")

        }

        else{
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
        
    });

});

server.listen(8082);
console.log("The server started on port 8082");

