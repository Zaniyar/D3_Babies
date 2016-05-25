d3.csv("/data/babies.csv", function (data) {

    data.forEach(function (d) {
        //console.log(d)
    });

    //sobald die Daten geladen sind, zaubere uns was vor!
    zaubere(data);
});

zaubere = function (daten) {
    console.log(daten);

    var data = daten;

    var w = 2200;
    var h = 1200;

    var scale = d3.scale
        .linear()
        .domain([0, 20])
        .range([10, w]);

    var x = d3.scale
        .linear()
        .domain([1993, 2015])
        .range([10, w]);

    var y = d3.scale
        .linear()
        .domain([1, 300])
        .range([10, w]);

    var r = d3.scale
        .linear()
        .domain([1, 30])
        .range([1, 30]);

    var color = d3.scale
        .linear()
        .domain([0, 20])
        .range(["red", "green"]);

    var canvas = d3.select('.datas')
        .append('svg')
        .attr('width', w)
        .attr('height', h);


    var circles = canvas.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .append("circle")
        .attr("cx",function(d,i) {return x(d.jahr);})
        .attr("cy",function(d,i) {return y(d.Anzahl);})
        .attr("r",function(d,i) {return r(d.Anzahl);})

        .style("fill",function(d,i) {return color(d.Anzahl);})
        .style("opacity",function(d,i) {return 100})

    var title = canvas.selectAll("g")
        .data(data)
        .append("text")
        .attr("dx", function(d){return x(d.jahr);})
        .attr("dy", function(d){return y(d.Anzahl);})
        .text(function(d){return d.vorname})

}
