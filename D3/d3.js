//starting point for svg dimensions
let svgHeight = 500;
let svgWidth = 960;


let axisDelay = 2500;
let circleDely = 2500;

//set the margin
let margin = { top: 75, right: 110, bottom: 90, left: 110 };

// //calculate chart Dimension by adjusting the margin
// let chartWidth = svgWidth - margin.left - margin.right;
// let chartHeight = svgHeight - margin.top - margin.bottom;
 

 // set which div chart will show up in
 let svg = d3.select("#bar")
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
// parse csv to json
d3.csv('d3_data.csv')
.then(function (data) {
  // reduce car color down to single instances
  // grab all occurrences of violations
  let color_count = data.reduce((counter, item) => {
    counter[item.vehicle_color] = counter.hasOwnProperty(item.vehicle_color) ? counter[item.vehicle_color] + 1 : 1;
    return counter;
  }, {});
  // format data 
  // create array
  let new_data = [];
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
      new_data.push(new color_obj(Object.entries(color_count)[key][0], Object.entries(color_count)[key][1]))
    }
  }
  console.log(data)
  console.log(new_data);
  // ============= Bar Chart =================

  x.domain(new_data.map(function (d, i) {
    return d.name;
  }))
  y.domain([0, d3.max(new_data, function (d) {
    return d.count
  })]);
  chartGroup.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    // .attr("color", "#ffff")

 chartGroup.append("g")
    .call(d3.axisLeft(y))
    .append("text")
    .attr("fill", "#555")
    .attr("transform", "rotate(-60)")
    .attr("y", -50)
    .attr("dy", ".1em")
    .attr("text-anchor", "end")
    .text("Violation Count");

 chartGroup.selectAll(".bar")
    .data(new_data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    //width of/spacing between bars
    .attr("x", function (d) {
      return x(d.name)
    })
    // height of bars
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
        .html(`Car Color: <b>${d.name}</b></br>Violation Count: <b>${d.count}</b>`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY - 50}px`)
    })
    .on('mouseout', () => {
      tooltip
        .transition()
        .duration(500)
        .style('opacity', 0)
    });
  // vega lite code
//   let vlSpec = {
//     data: {
//       values: new_data
//     },
//     mark: "bar",
//     encoding: {
//       y: { field: "count", type: "quantitative" },
//       x: {
//         field: "name", type: "nominal"
//       }
//     }
//   }
//   vegaEmbed("#printed_data", vlSpec);
})
.catch(err => console.log(err));