var io = require('socket.io');
var express = require('express');
var five = require('johnny-five');

var board = new five.Board();
var app = express();

app.use(express.static('matrix-func'));
var server = app.listen(3000, function() {
  console.log('connected!');
});

var sio = io(server);

// johnny-five event when johnny init ready
board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4,
    },
    devices: 2,
  });
  // socket連線成功時，開始偵聽前端的 swEvent 事件
  sio.on('connection', function(socket) {
    socket.on('mxOn', function(data) {
      console.log(data);
      matrix.on(data.index);
    });
    socket.on('mxOff', function(data) {
      console.log(data);
      matrix.off(data.index);
    });
    socket.on('mxClear', function(data) {
      console.log(data);
      matrix.clear(data.index);
    });
    socket.on('mxBrightness', function(data) {
      console.log(data);
      matrix.brightness(data.index, data.per);
    });
    socket.on('mxLed', function(data) {
      console.log(data);
      matrix.led(data.index, data.row, data.col, data.state);
    });
    socket.on('mxRow', function(data) {
      console.log(data);
      matrix.row(data.index, data.row, data.number);
    });
    socket.on('mxCol', function(data) {
      console.log(data);
      matrix.column(data.index, data.col, data.number);
    });
    socket.on('mxDraw', function(data) {
      console.log(data);
      matrix.draw(data.index, data.char);
    });
  });
});
