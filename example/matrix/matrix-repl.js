var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4,
    },
    devices: 2,
  });

  matrix.on().brightness(20);

  this.repl.inject({
    on: function(i) {
      console.log('matrix device: ' + i + '  on');
      matrix.off(i);
      matrix.on(i);
    },
    off: function(i) {
      console.log('matrix device: ' + i + ' is off');
      matrix.off(i);
    },
    clear: function(i) {
      console.log('matrix device: ' + i + ' is clear');
      matrix.clear(i);
    },
    brightness: function(i, per) {
      console.log(i + ' matrix device,brightness:' + per + '%');
      matrix.brightness(i, per);
    },
    led: function(i, row, col, state) {
      console.log('第' + i + '台\nrow:' + row + ',col:' + col + ',狀態：');
      matrix.led(i, row, col, state);
    },
    row: function(i, row, num) {
      console.log(i + ',' + row + ',' + num);
      matrix.row(i, row, num);
    },
    column: function(i, col, num) {
      console.log(i + ',' + col + ',' + num);
      matrix.column(i, col, num);
    },
    draw: function(i, char) {
      console.log('第' + i + '台\n字元：' + char);
      matrix.draw(i, char);
    },
  });
});
