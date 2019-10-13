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
  var joystick = new five.Joystick({
    //   [ x, y ]
    pins: ['A0', 'A1'],
  });

  sio.on('connection', function(socket) {
    joystick.on('change', function() {
      console.log('  x : ', this.x);
      console.log('  y : ', this.y);
      jXAxis = this.x;
      jYAxis = this.y;
      socket.emit('startData', {
        jXAxis: jXAxis,
        jYAxis: jYAxis,
      });
    });
  });
});
