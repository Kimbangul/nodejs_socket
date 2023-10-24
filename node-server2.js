const http = require('http');

const server = http.createServer();

server.listen(8888, () => {
  console.log('server is ready');
});

server.on('request', (req, res) => {
  res.end('on  handler');
});
