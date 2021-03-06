 /**
 * controller.js
 * queries the google fusion table and properly
 * formats data for google visualizations
 *
 */

  var options;
  var data;
  var chart;
  var genreations = genreations || {};

  google.load('visualization', '1', {packages: ['corechart']});

  google.setOnLoadCallback(draw);

  function draw() {
	    chart = new google.visualization.AreaChart(document.getElementById('visualization_div')); //get the tag to place the visualization at

      options = { //formating for the visualization
        explorer: { maxZoomOut: 1, maxZoomIn: .08, keepInBounds: true, axis: 'horizontal' },
        keepAspectRatio: true,
        height: 650,
        title: 'Game Genres',
        fontName: "Roboto",
        animation:{
          duration: 1000,
          easing: 'inAndOut',
        },
        "vAxis": {"title": "Percentage of releases in each genre",
				      "viewWindow" : {max : 100},
				      "textStyle" : { color: "black",
						      fontName: "Roboto",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Roboto",
							   fontSize: 16,
							   bold: false,
							   italic: false }},
			    "hAxis": {"title": "Year",
				      "textStyle" : { color: "black",
						      fontName: "Roboto",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Roboto",
							   fontSize: 16,
							   bold: false,
							   italic: false }},
        isStacked: "true",
        series: {
          Strategy: {
              color: 'red'},
          Action: {
            color: 'red'}
        }
      };

      var query = "SELECT * FROM 1Ol48CwKQEKb-wha9M7kGUf9Pv5g1flz6VSGQbmXv"; //query for relative volumes
      //var query = "SELECT * FROM 1IOfn29P52Wvcvs3tpc-5S_aiOtCJEDXsi17lqdPR"; //query for absolute volumes

      var opts = {sendMethod: 'auto'};
	    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
	    var temp;
      data;
      var genres = ["Action", "Adventure", "Construction", "Fighting", "FlightSim", "LifeSim", "MMO", "Music", "Puzzle", "Racing", "RPG", "Sandbox", "Shooter", "Sports","Stealth","Strategy"];
      queryObj.setQuery(query);

      queryObj.send(function(e) { //actually query the database
		    temp = e.getDataTable();
        data = new google.visualization.DataView(temp);
        chart.draw(data, options);
      });

  }
function update() {
  var numGenres = 16;
  var boxes = document.getElementsByClassName("genre");
  var checked = [];
  for (var i = 0; i < 16; i++)
  {
    checked[i] = boxes[i].checked;
  }
  console.log(checked);
  var q = "";
  for (var i = 0; i < 16; i++)
  {
    if(checked[i])
    {
      var j = 16 - i;
      var q = j + ", " + q;
    }
  }
  q = "0, " + q;
  q = q.substring(0, q.length - 2);
  eval("data.setColumns([" + q + "]);");
  console.log(q);
  chart.draw(data, options);

}


$([type="checkbox"]).change(function() {

    var i = genreations.update;
});











