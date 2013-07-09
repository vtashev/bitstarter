var express = require('express');

var app = express.createServer(express.logger());

require('buffer');
var fs = require('fs');

var buf = new Buffer(fs.readFileSync("index.html"));

//Test purpose
//console.log(buf.toString("utf-8", 0, 28));

app.get('/', function(request, response) {
  response.send(buf.toString("utf-8",0,28))
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
