var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var accelerometer = new five.Accelerometer({
    controller: 'ADXL345',
  });

  accelerometer.on('change', () => {
    const {
      acceleration,
      inclination,
      orientation,
      pitch,
      roll,
      x,
      y,
      z,
    } = accelerometer;
    console.log('Accelerometer:');
    console.log('  x            : ', x);
    console.log('  y            : ', y);
    console.log('  z            : ', z);
    console.log('  pitch        : ', pitch);
    console.log('  roll         : ', roll);
    console.log('  acceleration : ', acceleration);
    console.log('  inclination  : ', inclination);
    console.log('  orientation  : ', orientation);
    console.log('--------------------------------------');
  });
});
