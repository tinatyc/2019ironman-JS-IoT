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
  var accelerometer = new five.Accelerometer({
    controller: 'ADXL345',
  });

  sio.on('connection', function(socket) {
    accelerometer.on('change', data => {
      const {
        acceleration,
        inclination,
        orientation,
        pitch,
        roll,
        x,
        y,
        z,
      } = accelerometer;
      // console.log('Accelerometer:');
      // console.log('  x            : ', x);
      // console.log('  y            : ', y);
      // console.log('  z            : ', z);
      // console.log('  pitch        : ', pitch);
      // console.log('  roll         : ', roll);
      // console.log('  acceleration : ', acceleration);
      // console.log('  inclination  : ', inclination);
      // console.log('  orientation  : ', orientation);
      // console.log('--------------------------------------');
      socket.emit('startData', {
        axis: data,
        pitch: pitch,
        roll: roll,
        acceleration: acceleration,
        inclination: inclination,
        orientation: orientation,
      });
    });
  });
});
