var io = require('socket.io');
var express = require('express');
var five = require('johnny-five');

var board = new five.Board();
var app = express();

app.use(express.static('www'));
var server = app.listen(3000, function() {
  console.log('connected!');
});

var sio = io(server);

board.on('ready', function() {
  var motion = new five.Motion({
    pin: '7',
    freq: 250,
  });

  sio.on('connection', function(socket) {
    motion.on('calibrated', function() {
      //PIR Sensor Ready
      console.log('準備好啦！');
    });

    motion.on('motionstart', function(data) {
      // 偵測到有生物在動，觸發事件
      console.log('偵測到老闆！');
      socket.emit('startData', {
        // socket 傳送資料給前端
        isAction: data,
      });
    });
  });
});
