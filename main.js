d3.csv("/data/babies.csv", function(data) {
   // console.log(data);
    data.forEach(function(d) {
        console.log(d)
        $(".datas").append(JSON.stringify(d))
    });
});