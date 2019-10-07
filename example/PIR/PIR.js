var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var motion = new five.Motion({
    pin: '7',
    freq: 250,
  });

  // 開始時 Sensor 會處於校準狀態，最一開始的偵測到動作即觸發 calibrated 事件
  // calibrated 事件只會發生一次。
  motion.on('calibrated', function(data) {
    console.log(data);
    console.log('calibrated');
  });

  // 在calibrated 事件結束後，
  // 當在可觀察範圍內目標物發生運動時，觸發`motionstart`事件。
  motion.on('motionstart', function(data) {
    console.log(data);
    console.log('motionstart');
  });

  // 如果若干X毫秒內未發生移動時，
  // 將在`motionstart`事件之後觸發`motionend`事件
  motion.on('motionend', function(data) {
    console.log(data);
    console.log('motionend');
  });
});
