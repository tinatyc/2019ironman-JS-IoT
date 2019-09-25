var io = require('socket.io');
var express = require('express');
var five = require('johnny-five');

var board = new five.Board();
var app = express();

app.use(express.static('socket-conn'));
var server = app.listen(3000, function() {
  console.log('connected!');
});

var sio = io(server);

// johnny-five event when johnny init ready
board.on('ready', function() {
  // 指定LED output 為 Arduino 第13腳
  var led = new five.Led(13);
  // led 初始化狀態
  led.off();
  // socket連線成功時，開始偵聽前端的 swEvent 事件
  sio.on('connection', function(socket) {
    socket.on('swEvent', function(data) {
      //如果前端有動作則呼叫 johnny-five led.toggle() 切換led狀態
      console.log(data);
      if (data != false) {
        led.toggle();
      }
    });
  });
});
