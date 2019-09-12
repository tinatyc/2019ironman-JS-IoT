let five = require('johnny-five');

five.Board().on('ready', function() {
  let led = new five.Led.RGB({
    pins: [6, 5, 3],
    isAnode: true,
  });
  let i = 0;
  const rainbow = [
    '#FF0000',
    '#FF7F00',
    '#FFFF00',
    '#00FF00',
    '#0000FF',
    '#4B0082',
    '#8B008B',
  ];

  /* 產生1~100的亂數，秒數調快一點讓LED有閃爍的效果 */
  this.loop(50, () => {
    randomNum = Math.floor(Math.random() * 100 + 1);
    led.intensity(randomNum);
  });

  // this.loop(1000, () => {
  //   for (let i = 0; i < 100; i++) {
  //     (i => {
  //       setTimeout(function() {
  //         console.log(i);
  //         led.intensity(i);
  //       }, (i + 1) * 5);
  //     })(i);
  //   }
  // });

  /*讓宣告的rainbow變數輪流跑*/
  this.loop(1000, () => {
    led.color(rainbow[i++]);
    if (i === rainbow.length) {
      i = 0;
    }
    /*利用JS阻塞機制讓i累加，進而產生fadeIn效果*/
    for (let i = 0; i < 100; i++) {
      (i => {
        setTimeout(function() {
          console.log(i);
          led.intensity(i);
        }, (i + 1) * 5);
      })(i);
    }
  });
});
