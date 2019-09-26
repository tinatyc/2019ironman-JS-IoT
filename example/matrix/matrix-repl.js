var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4,
    },
    devices: 1,
  });

  this.repl.inject({
    on: function() {
      console.log('matrix on!');
      matrix.off();
      matrix.on();
    },
    off: function() {
      console.log('matrix off!');
      matrix.stop();
      matrix.off();
    },
    clear: function() {
      console.log('matrix clear');
      matrix.clear();
    },
    brightness: function() {
      console.log('matrix brightness');
      matrix.brightness();
    },
    led: function() {
      console.log(' matrix led');
      matrix.led();
    },
    row: function() {
      console.log(' matrix row');
      matrix.row();
    },
    column: function() {
      console.log(' matrix column');
      matrix.column();
    },
    draw: function() {
      console.log(' matrix draw');
      matrix.draw();
    },
  });
});
