d3.csv("/data/mini_babies.csv", function (data) {

    data.forEach(function (d) {
        //console.log(d)
    });

    //sobald die Daten geladen sind, zaubere uns was vor!
    zaubere(data);
});

zaubere = function (daten) {
    console.log(daten);

    var data = daten;

    var w = 500;
    var h = 500;

    var scale = d3.scale
        .linear()
        .domain([0, 20])
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
            return scale(d.Anzahl);
        })
        .attr("x", function (d, i) {
            return i * 40
        })
        .attr("fill", function (d) {
            return color(d.Anzahl)
        })

}
