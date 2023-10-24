const http = require('http');
const fs = require('fs');
const url = require('url');
const ejs = require('ejs');

const server = http.createServer();

server.listen(8888, () => console.log('server is ready'));
server.on('request', function (req, res) {
  let path = url.parse(req.url).pathname;
  console.log('path=' + path);

  fs.readFile('myejs.ejs', 'utf-8', function (error, data) {
    const emp = {
      id: 1234,
      name: 'haha',
    };
    res.end(ejs.render(data, emp));
  });
});
