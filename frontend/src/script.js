google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
      var data = google.visualization.arrayToDataTable([
        ['Continent', 'Vaccinated', 'COVID Cases'],
            ['Asia',  24430, 453430],
            ['Europe',  73430, 834630],
            ['North America',  54430, 644530],
            ['South America',  53430,  534530],
            ['Africa',  13430,  734530],
            ['Antartica',  34530,  234530],
            ['Oceania',  63530,  563530],
            ]);

      var materialOptions = {
        chart: {
          title: 'Total Covid Cases V.S. Vaccinated Cases'
        },
        hAxis: {
          title: 'Total Population',
          minValue: 0,
        },
        vAxis: {
          title: 'Country'
        },
        bars: 'horizontal'
      };
      var materialChart = new google.charts.Bar(document.getElementById('chart_div'));
      materialChart.draw(data, materialOptions);

      var data2 = google.visualization.arrayToDataTable([
        ['Continent', 'COVID Cases'],
        ['Asia',  453430],
        ['Europe',  834630],
        ['North America',  644530],
        ['South America',  534530],
        ['Africa',  734530],
        ['Antartica',  234530],
        ['Oceania',  563530],
        ]);

        var options2 = {
          title: 'Covid Cases of July 2021',
          width:'100%',
          height:500,
          bar: {groupWidth: "45%", height:13 }, 
          };
      var chart2 = new google.visualization.BarChart(document.getElementById('chart_div2'));

      chart2.draw(data2, options2);
      


      var data3 = google.visualization.arrayToDataTable([
        ['Continent', 'Vaccinated'],
        ['Asia',  24430],
        ['Europe',  73430],
        ['North America',  54430],
        ['South America',  53430],
        ['Africa',  13430],
        ['Antartica',  34530],
        ['Oceania',  63530],
        ]);

        var options3 = {
          title: 'Vaccinated as of July 2021',
          width:'100%',
          height:500,
          bar: {groupWidth: "45%", height:13 }, 
          };

        var chart3 = new google.visualization.BarChart(document.getElementById('chart_div3'));

        chart3.draw(data3, options3);
    }