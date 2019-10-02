var io = require('socket.io');
var express = require('express');
var five = require('johnny-five');

var board = new five.Board();
var app = express();

app.use(express.static('www'));
var server = app.listen(3000, function() {
  console.log('connected!');
});

var sio = io(server);

var timeArray = [];
var tempArray = [];
// Highcharts資料集必須用陣列，故宣告溫度與時間陣列

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'LM35', //設定感測器元件
    pin: 'A0', //設定輸入類比腳
    freq: 3000, //設定三秒取一次溫度值
  });

  sio.on('connection', function(socket) {
    temperature.on('data', function() {
      // console.log(this.celsius + '°C');
      temp = this.celsius; // 取得目前環境攝氏溫度
      tempArray.push(temp);
      tArr = getTime();
      console.log(tempArray, tArr);
      socket.emit('startTemp', {
        // 發送給 Client startTemp事件
        temp: tempArray,
        time: tArr,
      });
    });

    function getTime() {
      var time = new Date();
      var y = time.getFullYear();
      var m = time.getMonth() + 1;
      var d = time.getDate();
      var h = time.getHours();
      var min = time.getMinutes();
      var s = time.getSeconds();

      m = checkTime(m);
      d = checkTime(d);
      h = checkTime(h);
      min = checkTime(min);
      s = checkTime(s);

      dateTime = { year: y, mon: m, day: d, h: h, min: min, sec: s };
      timeStr = h + ':' + min + ':' + s;

      timeArray.push(timeStr);

      return timeArray;
    }
    function checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      } // add zero in front of numbers < 10
      return i;
    }
  });
});
