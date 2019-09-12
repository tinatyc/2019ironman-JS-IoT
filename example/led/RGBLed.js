var five = require('johnny-five');
// var board = new five.Board();

five.Board().on('ready', function() {
  var led = new five.Led.RGB({
    pins: [6, 5, 3],
    isAnode: true,
  });

  this.repl.inject({
    colors: function(v, i) {
      led.color(v);
      led.intensity(i);
      console.log(led.color(), led.intensity());
    },
  });
});
