var http = require('http')
var express = require('express')
var app = express();

app.get('/', function(request, result) {
	var ip = request.headers['x-forwarded-for'] || request.connection.remoteAddress
	result.send("your ip: " + ip);
});


port = 8000;
address = "localhost";

app.listen(port, function() {
	console.log("listening to port " + port);
});
