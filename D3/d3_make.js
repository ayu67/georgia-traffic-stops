//starting point for svg dimensions
let svgHeight2 = 650;
let svgWidth2 = 900;

//set the margin2
let margin2 = { top: 125, right: 110, bottom: 90, left: 110 };

// set which div chart will show up in
let svg2 = d3.select("#bar2")
    .append("svg")
    .attr("height", svgHeight2)
    .attr("width", svgWidth2),

// set width and height minus margin2s
width2 = +svg2.attr("width") - margin2.left - margin2.right,
height2 = +svg2.attr("height") - margin2.top - margin2.bottom,
// set initial grouping
chartGroup2 = svg2.append("g")
    .attr("transform", `translate(${margin2.left}, ${margin2.top})`);

// initialize x and y axes ranges
let x2 = d3.scaleBand()
.rangeRound([0, width2])
.padding(0.1);
let y2 = d3.scaleLinear()
.rangeRound([height2, 0]);

// tool tip
let tooltip2 = d3
.select("body")
.append("div")
.attr("class", "tooltip2")
.style("opacity", 0)
// parse csv to json
d3.csv('d3_data.csv')
.then(function (data) {
  // reduce car make down to single instances
  // grab all traffic stops
  let make_count = data.reduce((counter, item) => {
    counter[item.vehicle_make] = counter.hasOwnProperty(item.vehicle_make) ? counter[item.vehicle_make] + 1 : 1;
    return counter;
  }, {});
  // format data 
  // create array
  let new_data2 = [];
  // create object constructor
  function color_obj(name, count) {
    this.name = name;
    this.count = count;
  }
  // push each object to array
  for (key in Object.keys(make_count)) {
    // set name to object key
    // set count to object value
    if (key < 10 && Object.keys(make_count)[key] != "") {
      new_data2.push(new color_obj(Object.entries(make_count)[key][0], Object.entries(make_count)[key][1]))
    }
  }

  console.log(data)
  new_data2.sort((a, b) => parseFloat(b.count) - parseFloat(a.count));
  console.log(new_data2)

  // ============= Bar Chart =================

  x2.domain(new_data2.map(function (d, i) {
    return d.name;
  }))
  y2.domain([0, d3.max(new_data2, function (d) {
    return d.count
  })]);
  chartGroup2.append("g")
    .attr("transform", `translate(0,${height2})`)
    .call(d3.axisBottom(x2))
    .selectAll("text")
    // .attr("color", "#ffff")

 chartGroup2.append("g")
    .call(d3.axisLeft(y2))
    .attr('text-anchor', 'end')

 chartGroup2.append("text")
    .attr("transform", "rotate(-90)")
    .attr('x', -(height2 / 2))
    .attr('y', -(margin2.left)/1.5)
    .attr('text-anchor', 'middle')
    .text("Traffic Stop Count");   

 chartGroup2.append('text')
    .attr('x', width2 / 2 )
    .attr('y', -50)
    .attr('text-anchor', 'middle')
    .text('Traffic Stops by Vehicle Make')
    .style("font-size", "22px") 
    .style("text-decoration", "underline") 

 chartGroup2.append('text')
    .attr('x', width2 / 2 )
    .attr('y', svgHeight2 - 160)
    .attr('text-anchor', 'middle')
    .text('Vehicle Make')

 chartGroup2.selectAll(".bar")
    .data(new_data2)
    .enter()
    .append("rect")
    .attr("class", "bar")
    //width of/spacing between bars
    .attr("x", function (d) {
      return x2(d.name)
    })
    // height of bars
    .attr("y", function (d) {
      return y2(Number(d.count));
    })
    .attr("width", x2.bandwidth())
    .attr("height", function (d) {
      return height2 - y2(Number(d.count));
    })
    .on("mouseover", function (d) {
      tooltip2
        .transition()
        .duration(200)
        .style("opacity", 1);
      tooltip2
        .html(`Car Color: <b>${d.name}</b></br>Traffic Stop Count: <b>${d.count}</b>`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY - 50}px`)
    })
    .on('mouseout', () => {
      tooltip2
        .transition()
        .duration(500)
        .style('opacity', 0)
    });
})
.catch(err => console.log(err));