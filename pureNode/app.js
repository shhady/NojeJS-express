// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text-plain" });
//     res.write("<h1>welcome to http server</h1>");
//     res.end();
//   })
//   .listen(port, hostname, () => {
//     console.log(`server running at http://${hostname}:${port}/`);
//   });

var http = require("http");
var fs = require("fs");
var path = require("path");

http
  .createServer(function (request, response) {
    console.log("request ", request.url);

    var filePath = "." + request.url;
    if (filePath == "./") {
      filePath = "./index.html";
    } else if (filePath == "./raw-html") {
      response.end("<h1>Welcome to next page</h1>");
    } else if (filePath == "./users") {
      filePath = "./users.json";
    } else if (filePath == "./style") {
      filePath = "./public/style.css";
    } else if (filePath == "./script") {
      filePath = "./script.js";
    }

    var extname = String(path.extname(filePath)).toLowerCase();
    var mimeTypes = {
      ".html": "text/html",
      ".js": "text/javascript",
      ".css": "text/css",
      ".json": "application/json",
      ".png": "image/png",
      ".jpg": "image/jpg",
      ".gif": "image/gif",
      ".svg": "image/svg+xml",
      ".wav": "audio/wav",
      ".mp4": "video/mp4",
      ".woff": "application/font-woff",
      ".ttf": "application/font-ttf",
      ".eot": "application/vnd.ms-fontobject",
      ".otf": "application/font-otf",
      ".wasm": "application/wasm",
    };

    var contentType = mimeTypes[extname] || "application/octet-stream";

    fs.readFile(filePath, function (error, content) {
      if (error) {
        if (error.code == "ENOENT") {
          fs.readFile("./404.html", function (error, content) {
            response.writeHead(404, { "Content-Type": "text/html" });
            response.end(content, "utf-8");
          });
        } else {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
        }
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.end(content, "utf-8");
      }
    });
  })
  .listen(8125);
console.log("Server running at http://127.0.0.1:8125/");
