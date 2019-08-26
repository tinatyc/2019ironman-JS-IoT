var five = require('johnny-five');
//引入johnny-five

var board = new five.Board();
//宣告Arduino開發版

board.on('ready', function() {
  var led = new five.Led(11);

  for (let i = 0; i < 255; i++) {
    (function(i) {
      setTimeout(function() {
        console.log(i);
        led.brightness(i);
      }, (i + 1) * 100);
    })(i);
  }
});
