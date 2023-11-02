



const http = require('http') ; // creation de serveur sur 3000
http.createServer(function(request,repanse){
    repanse.setHeader('content-type','text/html');
    repanse.end("<h1>Hello Node!!!!</h1>");
}).listen(4000);














