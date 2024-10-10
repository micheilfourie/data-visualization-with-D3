// import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

// d3.select("body").append("h1").text("Learning D3");

// d3.selectAll("li").text("list item")

// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// d3.select("body").selectAll("h2")
//     .data(dataset)
//     .enter()
//     .append("h2")
//     .text((d) => d + " USD")
//     .style("color", (d) => d > 20 ? "green" : "red");

// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")

// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style("height", (d) => (d * 10) + "px");



// const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

// const w = 500;
// const h = 100;

// const svg = d3.select("body")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h)

// svg.selectAll("rect")
//     .data(dataset)
//     .enter()
//     .append("rect")
//     .attr("x", (d, i) => i * 30)
//     .attr("y", (d) => h - d * 3)
//     .attr("width", 25)
//     .attr("height", (d) => d * 3)
//     .attr("fill", "navy")
//     .attr("class", "bar")
//     .append("title")
//     .text((d) => d);

// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text((d) => d)
//     .attr("x", (d, i) => i * 30)
//     .attr("y", (d) => h - d * 3 - 3)
//     .attr("font-size", "25px")
//     .attr("fill", "red");



// const dataset = [
//     [34, 78],
//     [109, 280],
//     [310, 120],
//     [79, 411],
//     [420, 220],
//     [233, 145],
//     [333, 96],
//     [222, 333],
//     [78, 320],
//     [21, 123]
// ];

// const w = 500;
// const h = 500;

// const svg = d3.select("body")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h);

// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("cx", (d) => d[0])
//     .attr("cy", (d) => h - d[1])
//     .attr("r", 5)

// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text((d) => d[0] + ", " + d[1])
//     .attr("x", (d) => d[0] + 5)
//     .attr("y", (d) => h - d[1])



// const scale = d3.scaleLinear();
// const output = scale(50); 

// d3.select("body")
//     .append("h2")
//     .text(output);


// const scale = d3.scaleLinear()
//     .domain([250, 500])
//     .range([10, 150]);

// const output = scale(50);
// d3.select("body")
//     .append("h2")
//     .text(output);



// const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

//     const output = d3.max(positionData, (d) => d[2]); 

//     d3.select("body")
//       .append("h2")
//       .text(output)



// const dataset = [
//     [34, 78],
//     [109, 280],
//     [310, 120],
//     [79, 411],
//     [420, 220],
//     [233, 145],
//     [333, 96],
//     [222, 333],
//     [78, 320],
//     [21, 123]
// ];

// const w = 500;
// const h = 500;
// const padding = 30;

// const xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[0])])
//     .range([padding, w - padding]);

// const yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[1])])
//     .range([h - padding, padding]);

// const output = yScale(411);

// d3.select("body")
//     .append("h2")
//     .text(output)



// const dataset = [
//     [34, 78],
//     [109, 280],
//     [310, 120],
//     [79, 411],
//     [420, 220],
//     [233, 145],
//     [333, 96],
//     [222, 333],
//     [78, 320],
//     [21, 123]
// ];

// const w = 500;
// const h = 500;
// const padding = 60;

// const xScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[0])])
//     .range([padding, w - padding]);

// const yScale = d3.scaleLinear()
//     .domain([0, d3.max(dataset, (d) => d[1])])
//     .range([h - padding, padding]);

// const svg = d3.select("body")
//     .append("svg")
//     .attr("width", w)
//     .attr("height", h);

// svg.selectAll("circle")
//     .data(dataset)
//     .enter()
//     .append("circle")
//     .attr("cx", (d) => xScale(d[0]))
//     .attr("cy", (d) => yScale(d[1]))
//     .attr("r", 5)

// svg.selectAll("text")
//     .data(dataset)
//     .enter()
//     .append("text")
//     .text((d) => (d[0] + ", " + d[1]))
//     .attr("x", (d) => xScale(d[0] + 10))
//     .attr("y", (d) => yScale(d[1]))




const dataset = [
    [34, 78],
    [109, 280],
    [310, 120],
    [79, 411],
    [420, 220],
    [233, 145],
    [333, 96],
    [222, 333],
    [78, 320],
    [21, 123]
];

const w = 500;
const h = 500;
const padding = 60;

const xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[0])])
    .range([padding, w - padding]);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, (d) => d[1])])
    .range([h - padding, padding]);

const svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", (d) => xScale(d[0]))
    .attr("cy", (d) => yScale(d[1]))
    .attr("r", (d) => 5);

svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text((d) => (d[0] + "," + d[1]))
    .attr("x", (d) => xScale(d[0] + 10))
    .attr("y", (d) => yScale(d[1]))

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append("g")
    .attr("transform", "translate(0," + (h - padding) + ")")
    .call(xAxis);

svg.append("g")
    .attr("transform", "translate(" + padding + ", 0)")
    .call(yAxis);