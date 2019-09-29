var socket = io.connect();

$('#sendOn').click(function() {
  getVal();
  console.log(inputOn);
  socket.emit('mxOn', {
    index: inputOn,
  });
});
$('#sendOff').click(function() {
  getVal();
  console.log(inputOff);
  socket.emit('mxOff', {
    index: inputOff,
  });
});
$('#sendClear').click(function() {
  getVal();
  console.log(inputClear);
  socket.emit('mxClear', {
    index: inputClear,
  });
});

// Brightness
$('#sendBrightness').click(function() {
  getVal();
  console.log(inputBI, inputBPer);
  socket.emit('mxBrightness', {
    index: inputBI,
    percent: inputBPer,
  });
});

// Led
$('#sendLed').click(function() {
  getVal();
  console.log(inputLedI, inputLedRow, inputLedCol, inputLedSta);
  socket.emit('mxLed', {
    index: inputLedI,
    row: inputLedRow,
    col: inputLedCol,
    state: inputLedSta,
  });
});

//row col
$('#sendRow').click(function() {
  getVal();
  console.log(inputRowI, inputRow, inputRowNum);
  socket.emit('mxRow', {
    index: inputRowI,
    row: inputRow,
    number: inputRowNum,
  });
});
$('#sendCol').click(function() {
  getVal();
  console.log(inputColI, inputCol, inputColNum);
  socket.emit('mxCol', {
    index: inputColI,
    col: inputCol,
    number: inputColNum,
  });
});

// draw
$('#sendDraw').click(function() {
  getVal();
  console.log(inputDrawI, inputC);
  socket.emit('mxDraw', {
    index: inputDrawI,
    char: inputC,
  });
});

function getVal() {
  // input
  inputOn = $('#inputOn').val();
  inputOff = $('#inputOff').val();
  inputClear = $('#inputClear').val();
  inputBI = $('#inputBI').val();
  inputBPer = $('#inputBPer').val();
  inputLedI = $('#inputLedI').val();
  inputLedRow = $('#inputLedRow').val();
  inputLedCol = $('#inputLedCol').val();
  inputLedSta = $('#inputLedSta').val();
  inputRowI = $('#inputRowI').val();
  inputRow = $('#inputRow').val();
  inputRowNum = $('#inputRowNum').val();
  inputColI = $('#inputColI').val();
  inputCol = $('#inputCol').val();
  inputColNum = $('#inputColNum').val();
  inputDrawI = $('#inputDrawI').val();
  inputC = $('#inputC').val();
}
