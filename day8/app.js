var http = require('http');
var port = 8000;
var address = "localhost";

function getIndex(response, urlstring){
	var url = urlstring;
	if (url == '/') { url = "/index.html" };
	console.log("url: " + url);
	var fs = require('fs');
	fs.readFile(url.substring(1), 'utf8', function (err, data) {
		if (err) {
			response.writeHead(404, {"Content-Type": "text/plain"});
			response.end("404 Not Found");
		}
		response.writeHead(200, {"Content-Type": "text/html"});
		response.end(data);
	});
}

var server = http.createServer(function (request, response) {
	getIndex(response, request.url);
});

server.listen(port, address);

console.log("Server running at " + address + ":" + port);
