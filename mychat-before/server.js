const express = require('express');
const app = express();
const server = require('http').createServer(app);

const io = require('socket.io')(server);
server.listen(3000);
console.log('server is running');

const users = [];
const connections = [];

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  connections.push(socket);
  console.log('connection : %s sockets connected', socket);

  function updateUsername() {
    // io.sockets.emit('get users', users);
    io.sockets.emit('allUser', users);
  }

  socket.on('newUser', (userName) => {
    users.push(userName);
    socket.userName = userName;
    console.log(userName);
    updateUsername(); // 모든 소켓에 업데이트;
  });

  socket.on('newMsg', (msg) => {
    const message = { userName: socket.userName, msg: msg };
    console.log(`{ userName: ${socket.userName}, msg: ${msg} }`);
    io.sockets.emit('newMsgFromServer', message);
  });
});
