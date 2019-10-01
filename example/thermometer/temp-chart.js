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

board.on('ready', function() {
  var temperature = new five.Thermometer({
    controller: 'LM35',
    pin: 'A0',
    freq: 3000,
  });

  sio.on('connection', function(socket) {
    temperature.on('data', function() {
      // console.log(this.celsius + '°C');
      temp = this.celsius;
      tempArray.push(temp);
      tArr = getTime();
      console.log(tempArray, tArr);
      socket.emit('startTemp', {
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
      // console.log(timeStr);
      timeArray.push(timeStr);

      // var t = setTimeout(getTime, 1000);
      // console.log(timeArray);
      // return dateTime;
      return timeArray;
    }
    function checkTime(i) {
      if (i < 10) {
        i = '0' + i;
      } // add zero in front of numbers < 10
      return i;
    }
    // getTime();
  });
});
