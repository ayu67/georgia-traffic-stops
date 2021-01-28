//JS function used to get data from the 

var url = '/data'

fetch('/data').then(function (response) {
    return response.text();
}).then(function (text) {
    console.log('GET response text:');
    console.log(text); 
});

//****************************************

//starting point for svg dimensions
let svgHeight = 650;
let svgWidth = 850;

//set the margin
let margin = { top: 110, right: 90, bottom: 90, left: 90 };

//assiging chart div
let svg = d3.select("#bar1") 
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth),

// set width and height minus margins
width = +svg.attr("width") - margin.left - margin.right,
height = +svg.attr("height") - margin.top - margin.bottom,
// set initial grouping
chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// initialize x and y axes ranges
let x = d3.scaleBand()
.rangeRound([0, width])
.padding(0.1);
let y = d3.scaleLinear()
.rangeRound([height, 0]);

// tool tip
let tooltip = d3
.select("body")
.append("div")
.attr("class", "tooltip")
.style("opacity", 0)

// Read the data from flask api

d3.json(url)
.then(function (data) {
  // reduce car color down to single instances
  // grab all traffic stops
  let color_count = data.reduce((counter, item) => {
    counter[item.vehicle_color] = counter.hasOwnProperty(item.vehicle_color) ? counter[item.vehicle_color] + 1 : 1;
    return counter;
  }, {});
  // create array
  let color_data = [];
  // create object constructor
  function color_obj(name, count) {
    this.name = name;
    this.count = count;
  }
  // push each object to array
  for (key in Object.keys(color_count)) {
    // set name to object key
    // set count to object value
    if (key < 10 && Object.keys(color_count)[key] != "") {
      color_data.push(new color_obj(Object.entries(color_count)[key][0], Object.entries(color_count)[key][1]))
    }
  }

  console.log(data)
  color_data.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
  console.log(color_data);

  // ============= Bar Chart =================
  //creating x & y axis based on data
  x.domain(color_data.map(function (d, i) {
    return d.name;
  }))
  y.domain([0, d3.max(color_data, function (d) {
    return d.count + (40000 - d.count)
  })]);
  chartGroup.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")

 chartGroup.append("g")
    .call(d3.axisLeft(y))
    .attr('text-anchor', 'end')

 chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr('x', -(height / 2))
    .attr('y', -(margin.left)/1.5)
    .attr('text-anchor', 'middle')
    .text("Traffic Stop Count");   

 chartGroup.append('text')
    .attr('x', width / 2 )
    .attr('y', -50)
    .attr('text-anchor', 'middle')
    .text('Traffic Stops by Vehicle Color')
    .style("font-size", "22px") 
    .style("text-decoration", "underline") 

 chartGroup.append('text')
    .attr('x', width / 2 )
    .attr('y', svgHeight - 160)
    .attr('text-anchor', 'middle')
    .text('Vehicle Color')

 chartGroup.selectAll(".bar")
    .data(color_data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    //spacing between bars
    .attr("x", function (d) {
      return x(d.name)
    })
    //height of bars
    .attr("y", function (d) {
      return y(Number(d.count));
    })
    .attr("width", x.bandwidth())
    .attr("height", function (d) {
      return height - y(Number(d.count));
    })
    .on("mouseover", function (d) {
      tooltip
        .transition()
        .duration(200)
        .style("opacity", 1);
      tooltip
        .html(`Car Color: <b>${d.name}</b></br>Traffic Stop Count: <b>${d.count}</b>`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY - 50}px`)
    })
    .on('mouseout', () => {
      tooltip
        .transition()
        .duration(500)
        .style('opacity', 0)
    });
})
.catch(err => console.log(err));