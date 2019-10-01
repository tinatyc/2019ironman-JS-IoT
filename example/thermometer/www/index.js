var socket = io.connect();

// socket.emit('startTemp', function(data) {
//   console.log(data);
// });

socket.on('startTemp', function(data) {
  console.log(data);
  tempData = data.temp;
  timeData = data.time;
  renderChart(tempData, timeData);
});

function renderChart(tempData, timeData) {
  Highcharts.chart('chart', {
    // animation: Highcharts.svg,
    chart: {
      type: 'line',
      animation: false,
    },
    title: {
      text: 'Johnny-five with Temperature',
    },
    xAxis: {
      type: 'datetime',
      categories: timeData,
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
      {
        name: 'My Hand Temperature',
        data: tempData,
        // data: tempArray
      },
    ],
  });
}
