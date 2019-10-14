var socket = io.connect();
var xCenter = $('.bg').width() / 2;
var yCenter = $('.bg').height() / 2;

socket.on('startData', function(data) {
  // 當socket開始連線時，接收資料
  // console.log(data);
  XAxis = data.jXAxis;
  YAxis = data.jYAxis;
  XVal = XAxis.toFixed(2);
  YVal = YAxis.toFixed(2);

  varXVal = XVal * xCenter;
  bearXPos = xCenter - varXVal;

  varYVal = YVal * yCenter;
  bearYPos = yCenter - varYVal;
  $('.bear').css(
    'transform',
    'translate(' + bearXPos + 'px, ' + bearYPos + 'px',
  );

  // console.log(xCenter);
  // console.log(yCenter);

  console.log(bearXPos);
  console.log(bearYPos);
});
