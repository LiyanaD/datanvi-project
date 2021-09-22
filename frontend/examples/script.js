google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {'packages':['corechart']});
    google.charts.load('current', {packages: ['corechart', 'bar']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
            var data = google.visualization.arrayToDataTable([
            ['Continent', 'COVID Cases'],
            ['Asia',  453430],
            ['Europe',  834630],
            ['North America',  644530],
            ['South America',  534530],
            ['Africa',  734530],
            ['Antartica',  234530],
            ['Oceania',  563530],
            ]);

            var options = {
            title: 'COVID Cases in 2021',
            curveType: 'function',
            legend: { position: 'bottom' }
            };

            var linechart = new google.visualization.LineChart(document.getElementById('curve_chart'));
            linechart.draw(data, options);

            var data2 = google.visualization.arrayToDataTable([
            ['Continent', 'Vaccinated'],
            ['Asia',  24430],
            ['Europe',  73430],
            ['North America',  54430],
            ['South America',  53430],
            ['Africa',  13430],
            ['Antartica',  34530],
            ['Oceania',  63530],
            ]);

            var options2 = {
              title: 'Vaccinated as of July 2021',
              width:'100%',
              height:600,
              bar: {groupWidth: "45%", height:13 }, 
              };

            var chart = new google.visualization.BarChart(document.getElementById('chart_div2'));

            chart.draw(data2, options2);

            var data3 = google.visualization.arrayToDataTable([
            ['Continent', 'Vaccinated', 'COVID Cases'],
            ['Asia',  24430, 453430],
            ['Europe',  73430, 834630],
            ['North America',  54430, 644530],
            ['South America',  53430,  534530],
            ['Africa',  13430,  734530],
            ['Antartica',  34530,  234530],
            ['Oceania',  63530,  563530],
            ]);

            var options3 = {
              title: 'COVID Cases V.S. Vaccinated Population',
              hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
              vAxis: {minValue: 0}
        };

            var areachart = new google.visualization.AreaChart(document.getElementById('chart_div'));
            areachart.draw(data3, options3);
      }