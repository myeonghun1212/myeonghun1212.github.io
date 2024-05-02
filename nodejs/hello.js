const http = require("http");

const server = http.createServer(function(request, response){
    response.writeHead(200, {"Content-type" : "text/plain"});
    response.write("hello this is our first node.js application");
    response.end();
});

const port = 8080;
server.listen(port);

console.log("Server running at port = " + port);