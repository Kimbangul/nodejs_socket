const http = require('http');

const server = http.createServer();

server.listen(8888, () => {
  console.log('server is ready');
});

server.on('request', (req, res) => {
  console.log(req.method);
  res.writeHead(200, { 'Content-Type': 'text/html' }); //응답 헤더 설정
  res.end('<h1>Hi! Node.js</h1>'); // 응답 body 설정
  //  res.end('on  handler');
});
