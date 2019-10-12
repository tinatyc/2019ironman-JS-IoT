var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var servo = new five.Servo({
    pin: 10,
  });

  this.repl.inject({
    min: function() {
      servo.min();
      console.log('min');
    },
    max: function() {
      servo.max();
      console.log('max');
    },
    center: function() {
      servo.center();
      console.log('center');
    },
    to: function(deg) {
      servo.to(deg);
      console.log('servo to : ' + deg + ' deg.');
    },
    step: function(deg) {
      servo.step(deg);
      console.log('servo step : ' + deg + ' deg.');
    },
  });
  // servo.sweep();
  // this.loop(2000, function() {
  //   randomNum = Math.floor(Math.random() * 100 + 1);
  //   servo.to(randomNum);
  //   console.log(randomNum);
  // });
});
