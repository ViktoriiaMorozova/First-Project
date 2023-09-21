var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (req, res) {
    console.log("request incoming");
    var filePath = "." + req.url;
    if (filePath == "./") {
      filePath = "./index.html";
    }
    var contentType = "text/html";
    console.log("checkpoint 1");
    fs.readFile(filePath, function (error, content) {
      console.log("checkpoint 2");
      if (error) {
        if (error.code == "ENOENT") {
          console.log("checkpoint e1");
          res.writeHead(200, { "Content-Type": contentType });
          res.end("Error 404", "utf-8");
        } else {
          console.log("checkpoint e2");
          res.writeHead(500);
          res.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
          res.end();
        }
      } else {
        console.log("checkpoint 4");
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  })
  .listen(3000);
