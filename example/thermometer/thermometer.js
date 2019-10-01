var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'LM35',
    pin: 'A0',
    freq: 1000,
  });
  temperature.on('data', function() {
    console.log(this.celsius + '°C');
    temp = this.celsius;
  });
});
