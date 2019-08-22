var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var led = new five.Led(13);

  console.log('REPL Ready!');

  this.repl.inject({
    on: function() {
      console.log('打開LED囉～');
      led.stop();
      led.on();
    },
    off: function() {
      console.log('關掉LED');
      led.stop();
      led.off();
    },
    blink: function() {
      console.log('LED閃～閃～');
      led.blink(500);
    },
  });
});
