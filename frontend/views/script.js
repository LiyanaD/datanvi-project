d3.csv("/../export3.csv", function(data) {
    console.log(data[0]);

    var margin = {top: 20, right: 20, bottom: 30, left: 67},
    width = 950 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    // Set ranges
    var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
    var y = d3.scaleLinear()
          .range([height, 0]);
    
    var svg = d3.select("#chart_div").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")")
    
    // Format
//    data.forEach(function(d) {
//        d.total_cases = +d.total_cases;
//    });
    
    // Scale the range of the data in the domains
    x.domain(data.map(function(d) { return d.continent; }));
    y.domain([0, d3.max(data, function(d) { return d.total_cases; })]);
    
    svg.selectAll("#chart_div")
      .data(data)
      .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.continent); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.total_cases); })
      .attr("height", function(d) { return height - y(d.total_cases); });
      
    
     // Add x axis
      svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

      // Add y axis
      svg.append("g")
          .call(d3.axisLeft(y));
});