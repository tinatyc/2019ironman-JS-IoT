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
  photoresistor = new five.Sensor({
    pin: 'A0',
    freq: 250,
  });

  sio.on('connection', function(socket) {
    photoresistor.on('data', function() {
      pVal = this.value;
      console.log(this.value);
      socket.emit('startData', {
        pVal: pVal,
      });
    });
  });
});
