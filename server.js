var http =require('http');
http.createServer (function(request, response){
    response.writeHead(200);
     response.write('<h1>First Node page</h1>');
         response.end();

}).listen(3000)
console.log('Http server running on server 3000');