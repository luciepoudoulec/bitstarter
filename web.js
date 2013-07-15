var express = require('express');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
  var fileName = fs.readFileSync('index.html');
  var buf = new Buffer('fileName');
  for (var i = 0; i < fileName.length; i++){
    buf[i] = fileName.charCodeA(i);
  }
  response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
