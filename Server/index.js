const express = require("express");
const http = require("http");
const fs = require("fs");
const socket_io = require("socket.io");

const port = 8080;

var app = express();
var server = http.createServer(app);
var io_app = socket_io(server);

server.listen(port, function(error) {
  if (error)
    console.log(`Error listening on port ${port} Because : ${error}`);
  else
    console.log(`Listening on port ${port}`);
});

app.get("*", function(req, res) {
  var url = req.url;

  if (url == "/")
    url = "Client/index.html";

  if (url.startsWith("/")) {
    url = url.substring(1);
  }

  ReadHtmlFile(url, res);
});

function ReadHtmlFile(location, res) {
  try {
    fs.readFile(location, function(error, data) {
      if (error) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<html><h1>Error 404 page not found</h1></html>");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }

      res.end();
    });
  }
  catch (exception) {
    console.log(`Error reading html file at ${location} because : ${exception}`);
  }
}