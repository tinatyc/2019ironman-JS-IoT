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

// johnny-five object
board.on('ready', function() {
  var led = new five.Led(13);
  led.off();
  // socket.io work
  sio.on('connection', function(socket) {
    socket.on('swEvent', function(data) {
      console.log(data);
      if (data != false) {
        led.toggle();
      }
    });
  });
});
