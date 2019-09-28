// input
const inputOn = $('#inputOn').val();
const inputOff = $('#inputOff').val();
const inputClear = $('#inputClear').val();
const inputBI = $('#inputBI').val();
const inputBPer = $('#inputBPer').val();
const inputLedI = $('#inputLedI').val();
const inputLedRow = $('#inputLedRow').val();
const inputLedCol = $('#inputLedCol').val();
const inputLedSta = $('#inputLedSta').val();
const inputRowI = $('#inputRowI').val();
const inputRow = $('#inputRow').val();
const inputRowNum = $('#inputRowNum').val();
const inputColI = $('#inputColI').val();
const inputCol = $('#inputCol').val();
const inputColNum = $('#inputColNum').val();
const inputDrawI = $('#inputDrawI').val();
const inputC = $('#inputC').val();

// btn
const sendOn = $('#sendOn');
const sendOff = $('#sendOff');
const sendClear = $('#sendClear');
const sendBrightness = $('#sendBrightness');
const sendLed = $('#sendLed');
const sendRow = $('#sendRow');
const sendCol = $('#sendCol');
const sendDraw = $('#sendDraw');

var socket = io.connect();
// var i = 1;

socket.on('eventName', function(data) {
  // Client 端接收到由 Server 端接發出的 eventName 事件
  $('#resBackEnd').append(
    '<div class="alert alert-warning" role="alert">' + data.msg + '</div>',
  );
  console.log(data.msg);
});

$('#sendMsg').on('click', function() {
  inputVal = $('#textInput').val();
  count = i++;
  socket.emit('user', {
    // Client 端 送出 User 事件
    text: inputVal,
    count: count,
  });
});
