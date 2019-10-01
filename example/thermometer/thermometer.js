var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'LM35',
    pin: 'A0', // 類比輸入腳
    freq: 1000, // 一秒取一次溫度值
  });
  temperature.on('data', function() {
    console.log(this.celsius + '°C');
    temp = this.celsius;
    // 取攝氏溫度
    if (temp == 30) {
      // 當溫度 30 度時停止偵測動作
      temperature.disable();
    }
  });
});
