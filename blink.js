var five = require('johnny-five');
//引入johnny-five

var board = new five.Board();
//宣告Arduino開發版

board.on('ready', function() {
  //當Arduino開發版ready好，做以下動作

  var led = new five.Led(13);
  //宣告led在開發版第13腳

  led.blink(1000);
  //每500毫秒 LED會亮→滅→亮→滅...持續的閃爍
});
