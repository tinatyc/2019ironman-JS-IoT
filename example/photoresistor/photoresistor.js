var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  // new 一個 Johnny-Five Sensor 物件，宣告為 photoresistor
  photoresistor = new five.Sensor({
    pin: 'A0',
    freq: 250,
  });

  photoresistor.on('data', function() {
    // 讀取光敏電阻的值
    console.log(this.value);
  });
});
