var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    pins: {
      data: 2,
      clock: 3,
      cs: 4,
    },
    devices: 2,
  });
  var deviceNum = [0, 1];
  var i = 0;
  var myTeacher = 'The BestTeacher ->Amos  ^^  '.split('');

  matrix
    .clear()
    .on()
    .brightness(20);

  function next(i) {
    char = myTeacher.shift();
    matrix.draw(i, char);
    console.log(i, char);
    myTeacher.push(char);
    // console.log(c);
    console.log(myTeacher);
    // console.log(myTeacher.shift());
  }

  this.loop(1000, () => {
    if (i === deviceNum.length) {
      i = 0;
    }
    next(i);
    deviceNum[i++];
    // console.log(i);
  });
});
