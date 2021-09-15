google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Continent', 'COVID Cases'],
          ['Asia',  453430],
          ['Europe',  834630],
          ['North America',  644530],
          ['South America',  434530],
          ['Africa',  334530],
          ['Antartica',  234530],
          ['Oceania',  563530],
        ]);

        var options = {
          title: '2020',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data, options);
      }