var socket = io.connect();

socket.on('startData', function(data) {
  // 當socket開始連線時，接收資料
  // console.log(data);
  axis = data.axis;
  x = axis.x.toFixed(3);
  y = axis.y.toFixed(3);
  z = axis.z.toFixed(3);
  pitch = (data.pitch * 10).toFixed(2);
  roll = (data.roll * 10).toFixed(2);
  acceleration = data.acceleration.toFixed(3);
  inclination = data.inclination.toFixed(2);
  orientation = data.orientation;
  console.log('--------------');
  console.log(x);
  console.log(y);
  console.log(z);
  console.log(pitch);
  console.log(roll);
  console.log(acceleration);
  console.log(inclination);
  console.log(orientation);
  $('.xAxis').text(x);
  $('.yAxis').text(y);
  $('.zAxis').text(z);
  $('.pitch').text(pitch);
  $('.roll').text(roll);
  $('.acceleration').text(acceleration);
  $('.inclination').text(inclination);
  $('.orientation').text(orientation);
  $('.space3d').css(
    'transform',
    'rotateX(' +
      pitch +
      'deg) rotateY(' +
      roll +
      'deg) rotateZ(' +
      inclination +
      'deg)',
  );
});
