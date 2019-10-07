var socket = io.connect();

socket.on('startData', function(data) {
  //接收到偵測資料
  motionData = data.isAction;
  // 時間戳處理
  timestamp = parseInt((motionData.timestamp + '').substr(0, 10));
  // 取得是否偵測到動作
  isMotion = motionData.detectedMotion;
  // 轉換成人看的時間格式
  humanCanReadTime = getTime(timestamp);

  if (isMotion === true) {
    // 當老闆來時，在新分頁打開裝認真的網頁
    window.open(
      'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array',
      '_blank',
    );
    // 印出時間點
    $('.container').append(
      '<div class="alert alert-danger boss-alert" role="alert">老闆出現於 <span class="time">' +
        humanCanReadTime +
        '</span> ！</div>',
    );
  }
  // 時間戳格式轉換
  function getTime(timestamp) {
    var time = new Date(timestamp * 1000);
    var h = time.getHours();
    var min = time.getMinutes();
    var s = time.getSeconds();

    h = checkTime(h);
    min = checkTime(min);
    s = checkTime(s);

    timeStr = h + ':' + min + ' ' + s + '秒';

    return timeStr;
  }
  function checkTime(i) {
    if (i < 10) {
      i = '0' + i;
    } // add zero in front of numbers < 10
    return i;
  }
});
