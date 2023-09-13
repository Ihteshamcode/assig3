const http = require('http');
const server = http.createServer((req, res)=>{
    res.end('hello world');
});
const port = 5000;
server.listen(5000);
console.log('server is working ${5000}')