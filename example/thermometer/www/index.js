var socket = io.connect();

socket.on('startTemp', function(data) {
  // 當socket開始連線時，接收資料
  console.log(data);
  tempData = data.temp; // 溫度陣列
  timeData = data.time; // 時間陣列
  renderChart(tempData, timeData); // 產生圖表
});

function renderChart(tempData, timeData) {
  Highcharts.chart('chart', {
    // 在 div id="chart" 中繪製Highcharts圖表
    chart: {
      type: 'line', // 圖表種類
      animation: false,
    },
    title: {
      text: 'Johnny-five with Temperature',
    },
    xAxis: {
      //  X軸
      type: 'datetime',
      categories: timeData, // X軸資料
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      // 資料集，若有複數資料集以物件方式來增加
      {
        name: 'My Hand Temperature',
        data: tempData, //溫度陣列資料
      },
    ],
  });
}
