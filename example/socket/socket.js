var io = require('socket.io');
var express = require('express');
var app = express();

app.use(express.static('www'));

var server = app.listen(3000);
var sio = io.listen(server);

sio.on('connection', function(socket) {
  setInterval(() => {
    socket.emit('pi', { msg: 'msg...' });
  }, 2000);

  socket.on('user', function(data) {
    console.log('user:' + data.text);
  });
});