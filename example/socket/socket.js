var io = require('socket.io');
var express = require('express');
var app = express();

app.use(express.static('www'));

var server = app.listen(3000);
var sio = io.listen(server);

sio.on('connection', function(socket) {
  socket.emit('eventName', {
    msg: 'Connection Ready！',
  });

  socket.on('user', function(data) {
    console.log('user:' + data.text);
    socket.emit('eventName', {
      msg: '後端收到第' + data.count + '次！',
    });
  });

  // setInterval(() => {
  //   socket.emit('eventName', {
  //     msg: 'msg',
  //   });
  // }, 2000);
});
