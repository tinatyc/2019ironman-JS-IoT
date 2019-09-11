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
    stop: function() {
      console.log('stop');
      led.stop();
    },
    blink: function() {
      console.log('LED閃～閃～');
      led.blink(500);
    },
    toggle: function() {
      console.log('交換狀態');
      led.toggle();
    },
  });
});
