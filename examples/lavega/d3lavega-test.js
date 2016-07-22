var dataset = [ 5, 10, 15, 20, 25 ];
var dataset2 = [ 25, 7, 5, 26, 11 ];
var dataset3 = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
				14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
				24, 18, 25, 9, 3];
var dataset4 = [];
for (var i = 0; i < 30; i++) {
	var newNum = Math.random() * 70;
  dataset4.push(newNum);
}

d3.select("body")
	.selectAll("div")
	.data(dataset4)
	.enter()
	.append("div")
	.attr("class","bar")
	.style("height",function(data){
 		 return (data*5)+"px";
	});

var svg = d3.select("body").append("svg");
var w = 500;
var h = 50;
//var dataset = [ 5, 10, 15, 20, 25 ];

svg.attr("width", w);
svg.attr("height", h);
var circles = svg.selectAll("circle")
				.data(dataset)
				.enter()
				.append("circle");

	circles.attr("cx",function(data, i ) {
				return (i * 50) + 25;
			})
			.attr("cy", h/2)
			.attr("r",function(data) {
			  return data;
		    });
