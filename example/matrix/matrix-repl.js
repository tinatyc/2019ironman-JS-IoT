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
      console.log('第' + i + '台 device ：On');
      matrix.on(i);
    },
    off: function(i) {
      console.log('第' + i + '台 device ：Off');
      matrix.off(i);
    },
    clear: function(i) {
      console.log('第' + i + '台 device ：清除狀態');
      matrix.clear(i);
    },
    brightness: function(i, per) {
      console.log('第' + i + '台, 亮度：' + per + ' %');
      matrix.brightness(i, per);
    },
    led: function(i, row, col, state) {
      console.log('第' + i + '台');
      console.log('row：' + row + ' col：' + col);
      console.log('狀態：' + state);
      matrix.led(i, row, col, state);
    },
    row: function(i, row, num) {
      console.log('第' + i + '台\nrow：' + row);
      matrix.row(i, row, num);
    },
    column: function(i, col, num) {
      console.log('第' + i + '台\ncol：' + col);
      matrix.column(i, col, num);
    },
    draw: function(i, char) {
      console.log('第' + i + '台\n字元：' + char);
      matrix.draw(i, char);
    },
  });
});
