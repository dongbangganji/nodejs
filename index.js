const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req,res){
   res.statusCode = 200;
   res.end('hello, world!\n');
});

server.listen(port, hostname, () => {
    console.log(`dfsdfsdfsdfsdfsdfsdfsdfsdfsdf${hostname}:${port}/`);
});