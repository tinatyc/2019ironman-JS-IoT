var socket = io.connect();

var xCenter = $('.bg').width() / 2; // 取得水平中心點
var yCenter = $('.bg').height() / 2; // 取得垂直中心點

socket.on('startData', function(data) {
  // 當socket開始連線時，接收資料
  // console.log(data);
  XAxis = data.jXAxis;
  YAxis = data.jYAxis;

  XVal = XAxis.toFixed(2); // 取到小數點後兩位數
  YVal = YAxis.toFixed(2); // 取到小數點後兩位數

  varXVal = XVal * xCenter; // 取 joystick X軸移動量，轉成視窗元素 X軸 移動量
  bearXPos = xCenter + varXVal; // 熊俠 X軸 的位置

  varYVal = YVal * yCenter; // 取 joystick Y軸移動量，轉成視窗元素 Y軸 移動量
  bearYPos = yCenter + varYVal; // 熊俠 Y軸 的位置

  // 使用 jQ .css()函式改變熊俠位置
  $('.bear').css(
    'transform',
    'translate(' + bearXPos + 'px, ' + bearYPos + 'px',
  );

  // console.log(xCenter);
  // console.log(yCenter);

  console.log(bearXPos);
  console.log(bearYPos);
});
