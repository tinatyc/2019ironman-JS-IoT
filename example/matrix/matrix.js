var five = require('johnny-five');
//引入johnny-five

var board = new five.Board();
//宣告Arduino開發版

board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4,
    },
  });

  matrix.on().brightness(20);

  var msg = 'King Tzeng in IRON MAN!'.split('');
  // Display each letter for 1 second
  function next() {
    var c;

    if ((c = msg.shift())) {
      matrix.draw(c);
      setTimeout(next, 1000);
    }
  }

  next();

  this.repl.inject({
    matrix: matrix,
    draw: function(shape) {
      matrix.draw(five.Led.Matrix.CHARS[shape]);
    },
  });
});
