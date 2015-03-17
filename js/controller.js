/**
 * controller.js
 *
 * Defines the angular controller which defines button behavior on the
 * librarians data visualization.
 *
 *
 */

  google.load('visualization', '1', {packages: ['corechart']});

  google.setOnLoadCallback(drawChart);

  function drawChart() {
	    // Create the chart that will be used to animate year-by-year information.
	    var chart = new google.visualization.AreaChart(document.getElementById('visualization_div'));	    
      var options = {
        width: 1000,
        height: 618,
        explorer: { maxZoomOut: 1, keepInBounds: true },

        title: 'Game Genres',
        fontName: "Roboto",
        "vAxis": {"title": "Year",
				      "viewWindow" : {max : 1100}, 
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
			    "hAxis": {"title": "Number of Releases",
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
        isStacked: "true"
      };

	    
      var query = "SELECT * FROM 1IOfn29P52Wvcvs3tpc-5S_aiOtCJEDXsi17lqdPR";	    
	    var opts = {sendMethod: 'auto'};
	    var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
	    var temp;
      var data2;	
    
      queryObj.setQuery(query);

      queryObj.send(function(e) { 
		    temp = e.getDataTable();
        
        data2 = new google.visualization.DataView(temp);
        
		    chart.draw(data2, options);
    });

  }
                    
                    
                    
                    
                    
                    
                    
                    
                    

	    