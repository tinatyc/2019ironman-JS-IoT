var socket = io.connect();

socket.on('startData', function(data) {
  // 當socket開始連線時，接收資料
  // console.log(data);
  tempData = data.pVal;
  topPosition = tempData / 10;
  console.log(topPosition);
  if (topPosition >= 100) {
    topPosition = 100;
  }
  $('.bear').css('top', '' + topPosition + '%');
});
