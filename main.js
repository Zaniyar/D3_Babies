var data = [10, 20, 40, 55, 66];

zaubere(data);

zaubere = function (daten) {

    var data = daten;
    var w = 500;
    var h = 500;

    var scale = d3.scale
        .linear()
        .domain([0, 60])
        .range([0, w]);

    var color = d3.scale
        .linear()
        .domain([0, 125])
        .range(["red", "green"]);

    var canvas = d3.select('.datas')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);


    var bars = canvas.selectAll("rect")
        .data(data)         // update => dom element is already there - will be updated before enter() function
        .enter()            // enter => more data elements than dom elements
        .append("rect")     // exit => more dom elements than data elements
        .attr("width", 40)
        .attr("height", function (d) {
            return scale(d);
        })
        .attr("x", function (d, i) {
            return i * 40
        })
        .attr("fill", function (d) {
            return color(d)
        })

}

//hier ganz simples beispiel für ein svg kreis und rechteck
/*
 var canvas = d3.select('.datas')
 .append('svg')
 .attr('width', 500)
 .attr('height', 500);

 var circle = canvas.append("circle")
 .attr("cx",100)
 .attr("cy",100)
 .attr("r",50)
 .attr("fill","red");

 var rect = canvas.append("rect")
 .attr("width",100)
 .attr("height",100)
 .attr("x",200)
 .attr("y",200);
 */

