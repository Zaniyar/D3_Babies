
var minAnzahl = +5;
var defaultSortOrder = "ascending";
var maxYearFound = +0;
var data = [];

d3.csv("data/babies.csv", function(csvData) {
            csvData.forEach( function(row) {
                    if(row.jahr > maxYearFound) {
                        maxYearFound = +row.jahr;
                    }
                    data.push( {
                                year: +row.jahr,
                                firstName: row.vorname, 
                                sex: row.geschlecht, 
                                anzahl: +row.Anzahl
                               } )
            });
            render(defaultSortOrder, minAnzahl, maxYearFound);
});

function render(d3Comparator, min, year) {

    workingData = data.filter(function(row, index) {
                                   return row.year == year && row.anzahl >= min
                              });

    if(d3Comparator) {
            workingData = workingData.sort(function(a, b) {
            return d3[d3Comparator](a.anzahl, b.anzahl);
        });
    }    

    var minYear = d3.min(workingData, function(d) { return d.year;} );
    var maxYear = d3.max(workingData, function(d) { return d.year;} );

    var minCount = d3.min(workingData, function(d) { return d.anzahl;} );
    var maxCount = d3.max(workingData, function(d) { return d.anzahl;} );    

    var range = d3.range(minCount, maxCount, 5);

    var w = 1200;
    var h = 500;
    
    var colorScale = d3.scale.category10();
    
    var distanceScale = d3.scale
                        .linear()
                        .domain([minYear, maxYear])
                        .range(range);  


    var canvas = d3.select('.datas')
        .append('svg')
        .attr('width', w)
        .attr('height', h)
            .append("g");
    
    var circles = canvas.selectAll("g")
            .data(workingData)
            .enter() 
                .append("circle") 
                .filter(function(d) { return d.anzahl >= min && d.year === year})  
                .attr("cy", function(d) { return distanceScale(d.year)})
                .attr("cx", function(d,i){ return i})
                .attr("r", function(d){ return  d.anzahl })
                .attr("fill",function(d){ return colorScale(d.anzahl)})
                .text(function(d){ return d.firstName; });        
}