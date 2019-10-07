var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var accelerometer = new five.Accelerometer({
    controller: 'ADXL345',
    // Optionally set the range to one of
    // 2, 4, 8, 16 (±g)
    // Defaults to ±2g
    // range: ...
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
