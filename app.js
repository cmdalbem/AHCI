//
//
// app.js - Main JavaScript file of the application
//

// Management of module dependencies by the lib require.js
require([
	"defaults",
	"SongAnalyzer",
	// "scales",
	// "chords",
	"guitarConstants",
	"songs"
],
	// Function called only after all dependencies have been loaded
	function() {
		applyScaleFactor();	
		initializeGlobals();

		analyzer = new SongAnalyzer();

		fillSongsSelectionList();

		loadSong("Django Reinhardt - Minor Swing");

		initializeControlPanel();
	}
);

function applyScaleFactor() {
	SVG_VPADDING 			*= SCALE_FACTOR;
	LINES_WIDTH 			*= SCALE_FACTOR;
	NOTES_FONT_SIZE 		*= SCALE_FACTOR;
	DEFAULT_NOTES_SIZE 		*= SCALE_FACTOR;
	FRET_IMAGE_WIDTH 		*= SCALE_FACTOR;
	FRET_IMAGE_HEIGHT 		*= SCALE_FACTOR;
	SCALE_HIGHTLIGHT_RECT_HEIGHT *= SCALE_FACTOR;
	
	var i;
	for(i in stringCoords) {
		stringCoords[i] *= SCALE_FACTOR;
	}
	for(i in fretWidths) {
		fretWidths[i] *= SCALE_FACTOR;
	}
	for(i in fretCoords) {
		fretCoords[i] *= SCALE_FACTOR;
	}


	// var panelDivs = document.getElementsByClassName("controlPanel");
	// for(i=0; i<panelDivs.length; i++) {
	// 	panelDivs[i].style.width = (parseInt(panelDivs[i].style.width,10) * SCALE_FACTOR) + "px";
	// }
}

function initializeGlobals() {
	notesRadius = DEFAULT_NOTES_SIZE;
	linesTransparency = DEFAULT_LINES_TRANSPARENCY;
	scaleHighlightsTransparency = DEFAULT_SCALEHIGHLIGHTS_TRANSPARENCY;
	imageTransparency = DEFAULT_IMAGE_TRANSPARENCY;
}

// Configuration of control panels
function initializeControlPanel() {

	function updateAttrConfig(controlName, elemName, newValue) {
		d3.select("#"+controlName).property("value", newValue);
		svg.selectAll("circle").attr(elemName, newValue);
	}

	function updateStyleConfig(controlName, elemName, newValue) {
		d3.select("#"+controlName).property("value", newValue);
		svg.selectAll(elemName).style("opacity", newValue/100);
	}

	d3.select("#data_radius").on("input", function() {
		notesRadius = this.value;
		updateAttrConfig("data_radius","r", this.value);
	});

	d3.select("#linesAlpha").on("input", function() {
		linesTransparency = this.value/100;
		updateStyleConfig("linesAlpha", "path", this.value);
	});

	d3.select("#scaleHighlights").on("input", function() {
		scaleHighlightsTransparency = this.value/100;
		updateStyleConfig("scaleHighlights", "rect", this.value);
	});

	d3.select("#imageTransparencyCtrl").on("input", function() {
		imageTransparency = this.value/100;
		updateStyleConfig("imageTransparencyCtrl", "image", this.value);
	});

	// // FIX ME!
	// d3.select("#showImage").on("input", function() {
	// 	console.log(this.value);
	// 	// svg.selectAll(image).attr("hidden", this.value);
	// });

	updateAttrConfig("data_radius","r",DEFAULT_NOTES_SIZE);
	updateStyleConfig("linesAlpha", "path", DEFAULT_LINES_TRANSPARENCY*100);
	updateStyleConfig("scaleHighlights", "rect", DEFAULT_SCALEHIGHLIGHTS_TRANSPARENCY*100);
	updateStyleConfig("imageTransparencyCtrl", "image", DEFAULT_IMAGE_TRANSPARENCY*100);
}

function highlightNoteClass(noteClass) {
	d3.selectAll("."+noteClass)
		// .transition()
		.style("stroke-opacity", "0");

	// Show tooltip on the barchart corresponding to this class
	// var note = noteClass.split("note_")[1];
	// if(note) {
	// 	var a = tip.show(note);
	// }
}

function unhighlightNoteClass(noteClass) {
	d3.selectAll("."+noteClass)
		// .transition()
		.style("stroke", "white")
		.style("stroke-width", "3")
		.style("stroke-opacity", "0.8");

	// var note = noteClass.split("note_")[1];
	// if(note) {
	// 	tip.show(note);
	// }
}

// Fill up combobox of songs selection with DataBase
function fillSongsSelectionList() {
	var select = document.getElementById("songSelect"); 
	Object.keys(songs).sort().forEach( function(i, index) {
		var opt = i;
	    var el = document.createElement("option");
	    el.textContent = opt;
	    el.value = i;
	    // el.selected = index===0 ? true : false;
	    select.appendChild(el);
 	});
}

// Fill up scales for selection
function fillScalesSelectionList(scalesList) {
	var select = document.getElementById("scaleSelect"); 

	// Clear past values
	var length = select.options.length;
	for (i = 0; i < length; i++) {
	  select.options[0] = null;
	}

	scalesList.forEach( function(i, index) {
		var name = i[0];
		var score = i[1];

	    var el = document.createElement("option");
	    el.textContent = "[" + score + "%]  " + name;
	    el.value = name;
	    el.selected = index===0 ? true : false;
	    select.appendChild(el);
 	});
}


//////////////////////
// GLOBAL variables //
//////////////////////

var scaleNotesPositions;
var selectedScale;
var analyzer;
var maxNotesPerPosition;
var notesMatrix;
var svg;

var notesRadius;
var linesTransparency;
var scaleHighlightsTransparency;
var imageTransparency;

var tip;


//////////////////////


function updateScale(scaleName) {
	// console.log("updateScale(" + scaleName + ")");
	selectedScale = scaleName;
	scaleNotesPositions = analyzer.getScaleNotesPositions(scaleName);

	svg.selectAll("rect")
		.data(scaleNotesPositions)
		.attr("width", function(d) { return fretWidths[d.fret]; })
		.attr("height", SCALE_HIGHTLIGHT_RECT_HEIGHT)
		.attr("opacity", scaleHighlightsTransparency )
		.attr("x", function(d) { return fretCoords[d.fret] - fretWidths[d.fret]/2; })
		.attr("y", function(d) { return stringCoords[d.string] - SCALE_HIGHTLIGHT_RECT_HEIGHT/2; })
		.attr("fill", SCALE_NOTE_COLOR );

	// Update note circles colors
	var circles = svg.selectAll("circle")[0];
	if (circles) {
		circles.forEach( function(c) {
			var whichNote = c.getAttribute("class").split("note_")[1];

			if (c.getAttribute("fill") != "grey") {
				if (selectedScale && scales[selectedScale].indexOf(whichNote)<0) {
					c.setAttribute("fill", NOTES_HIGHLIGHT_COLOR);
				} else {	
					c.setAttribute("fill", NOTESCOLOR);
				}
			}
			
		});
	}
}

function loadSong(songName) {

 	// Select the right song in the songs list
 	var listOfSongs = document.getElementById('songSelect').getElementsByTagName('option');
 	for (var i=0; i<listOfSongs.length; i++) {
 		if (listOfSongs[i].value == songName)
 			listOfSongs[i].selected = 'selected';
 	};

	//////////
	// DATA //
	//////////

	var songNotes = songs[songName];

	var notesTotal = 0;	
	notesMatrix = [];
	var notesCount = { "C": 0,"C#": 0,"D": 0,"D#": 0,"E": 0,"F": 0,"F#": 0,"G": 0,"G#": 0,"A": 0,"A#": 0,"B": 0 };
	for(var i=0; i<nfrets; i++) {
		notesMatrix[i] = new Array(nstrings);
		for(var j=0; j<nstrings; j++) {
	        notesMatrix[i][j] = 0;
	    }
	}

	function printFretBoard() {
		for(var i=0; i<nfrets; i++) {
			console.log(notesMatrix[i].join("\t"));
		}
	}

	// Counts numbers of notes for each fret position
	songNotes.forEach( function(i, index) {
		var x = i.fret-1;
		var y = i.string-1;

		var isFretInBounds = x >= 0 && x < nfrets-1;
		var isStringInBounds = y >= 0 && y < nstrings-1;
		
		// console.assert(isFretInBounds, "Fret index out of bounds");
		// console.assert(isStringInBounds, "String index out of bounds");
		
		if (isFretInBounds && isStringInBounds) {
			var note = notesMap[y][x];
			
			// Add count in the fretboard mapping
			notesMatrix[x][y]++;

			// Add count in the count of notes
			notesCount[note]++;

			// Add count in the count of total notes
			notesTotal++;
		} else {
			// Remove from the listing the invalid notes
			songNotes.splice(index, 1);
		}
	});
	maxNotesPerPosition = d3.max(notesMatrix, function(d) { return d3.max(d); });

	// Analyze song
	var scaleScores = analyzer.guessScale(notesCount,notesTotal);
	fillScalesSelectionList(scaleScores);

	// updateScale(scaleScores[0][0]);
	selectedScale = scaleScores[0][0];
	scaleNotesPositions = analyzer.getScaleNotesPositions(scaleScores[0][0]);

	//////////////////////
	// Initializations  //
	//////////////////////

	// Clear workspace
	// d3.select("#container").remove()
	
	// Container DIV
	// var container = d3.select("body")
					// .append("div")
					// .attr("id","container");
	var container = d3.select("#container");
	container[0][0].innerHTML = "";

	var p = d3.select("#container").append("div")
		.attr("class","centralized muted")
		.style("width",(120*SCALE_FACTOR)+"px");
	p = p[0][0];
 	p.innerHTML = notesTotal + " notes loaded.";

	var div = container.append("div")
			.style("width","100%")
			.style("padding","5px 0 5px 0")
			.style("overflow-x", "hidden");

	// Insert SVG element
	svg = div.append("svg")
		.attr("id","fretboard")
		.style("cursor","move")
		.attr("width", FRET_IMAGE_WIDTH) // dimensions of the fret: image
		.attr("height", FRET_IMAGE_HEIGHT + SVG_VPADDING*2);

	svg.append("svg:image")
		.attr('id',"image")
		.attr('width', "100%")
		.attr('height', "100%")
		.attr("xlink:href","img/neck.jpg");
		// .attr('opacity', '0');


	////////////////////////////////////////////////////////////////////////////


	////////////////////
	//////// PLOTTING //
	////////////////////


	///////////
	// Lines //
	///////////

	var pairs = d3.pairs(songNotes);
	// var colorGradient = d3.scale.linear()
	//   .domain([0,pairs.length])
	//   .interpolate(d3.interpolateHcl)
	//   .range([d3.rgb(229, 67, 70), d3.rgb(58,141,195)]);
	//   // d3.rgb(255,255,205),
	svg.selectAll(".line")
		.data(pairs)
		.enter()
		.append("path")
		// Crazy function that creates a cool slightly bended curve
		.attr("d", function(d) {
			if ( d[0].fret-1 >= 0 && d[0].string-1 >= 0 && d[1].fret-1 >= 0 && d[1].string-1 >= 0 ) {
				var sx = fretCoords[d[0].fret-1];
				var sy = stringCoords[d[0].string-1];
				var tx = fretCoords[d[1].fret-1], ty = stringCoords[d[1].string-1];
				var dx = tx - sx, dy = ty - sy;
				var dr = 2 * Math.sqrt(dx * dx + dy * dy);
				return "M" + sx + "," + sy + "A" + dr + "," + dr + " 0 0,1 " + tx + "," + ty;
			}
			else {
				return "";
			}

		  })
		.on("mouseover", function(d) { 
			d3.select(this)
				// .transition()
				// .ease("easeOutQuint")
				.style("opacity", 1); 
		})
		.on("mouseout", function(d) {
			d3.select(this)
				.transition()
				.style("opacity", linesTransparency );
		})
		.style("stroke", CURVECOLOR)
		// .style("stroke", function(d,i) {  return colorGradient(i); } )
		.style("fill", "none")
		.style("stroke-width", LINES_WIDTH)
	   	.style("opacity", linesTransparency);

	///////////
	// Notes //
	///////////

	var scaler = d3.scale.linear()
	    .domain([0, maxNotesPerPosition])
	    .range([0.3, 1]);

	// Scale notes
	svg.selectAll("rect")
		.data(scaleNotesPositions)
		.enter()
		.append("rect")
			.attr("width", function(d) { return fretWidths[d.fret]; })
			.attr("height", SCALE_HIGHTLIGHT_RECT_HEIGHT)
			.attr("opacity", scaleHighlightsTransparency )
			.attr("x", function(d) { return fretCoords[d.fret] - fretWidths[d.fret]/2; })
			.attr("y", function(d) { return stringCoords[d.string] - SCALE_HIGHTLIGHT_RECT_HEIGHT/2; })
			.attr("fill", SCALE_NOTE_COLOR );
	
	// Create a SVG group for each fret ...
	var divs = svg.selectAll("g.fret")
		.data(notesMatrix)
		.enter()
		.append("g");

	// ... And then of each fret iterate by the strings, creating as well one
	//   SVG group for each one.
	var g = divs.selectAll("g")
		.data(function(d) { return d; })
		.enter()
		.append("g")
			// The transform property will set the right position of the note
			.attr("transform", function(d,i,j) { return "translate(" + fretCoords[j] + "," + (stringCoords[i]) + ")"; } )
			// The opacity will be given by a scaler that maps the note frequency
			//    to the opacity scale set earlier.
			.attr("opacity", function(d) { return scaler(d); })
			// The following 2 properties are for interactivity
			.on("mouseover", function(d,i,j) { 
				unhighlightNoteClass("note_"+notesMap[i][j]);
				d3.select(this)
					// .transition()
					// .ease("easeOutQuint	")
					.style("opacity", 1)
					.style("cursor","default");
			})
			.on("mouseout", function(d,i,j) {
				highlightNoteClass("note_"+notesMap[i][j]);
				d3.select(this)
					.transition()
					.style("opacity", scaler(d) );
			});

	// Adds svg circle
	g.append("circle")
			.attr("class", function(d,i,j) { return "note_" + notesMap[i][j]; })
			.attr("id", function(d,i,j) { return i + "," + j; })
			.attr("r", notesRadius)
			.attr("fill", function(d, i, j) { 
				if (d===0) {
					return "grey";
				} else if (selectedScale && scales[selectedScale].indexOf(notesMap[i][j])<0) {
					return NOTES_HIGHLIGHT_COLOR;
				} else {	
					return NOTESCOLOR;
				}
			} );
			// .on("mouseover", function(d) { 
			// 	var node = d3.select(this);
			// 	node.style("stroke", "#E0E4CC"); 
			// 	node.style("stroke-width", "2px"); 
			// })
			// .on("mouseout", function(d) {
			// 	var node = d3.select(this);
			// 	node.style("stroke", "none"); 
			// });

	// Adds svg text
	g.append("text")
			.text(function(d,i,j) { return notesMap[i][j]; })
			// .attr("x", fretCoords[i] )
			// .attr("y", function(d,j) { return stringCoords[j]; })
		    // .attr("opacity", function(d) { return scaler(d); })
		    .attr('class', 'noselect')
		    .style("font-family", "sans-serif")
			.style("font-size", NOTES_FONT_SIZE)
			.style("text-anchor", "middle")
			.style("dominant-baseline", "middle")
			.style("pointer-events", "none")
			.style("fill","white");

	// g.exit().remove();

	svgPanZoom('#fretboard', {
		  viewportSelector: '.svg-pan-zoom_viewport'
		, panEnabled: true
		, controlIconsEnabled: false
		, zoomEnabled: false
		// , dblClickZoomEnabled: true
		// , zoomScaleSensitivity: 0.2
		// , minZoom: 0.5
		// , maxZoom: 10
		, fit: false
		, center: false
		, refreshRate: 'auto'
		// , beforeZoom: function(){}
		// , onZoom: function(){}
		, beforePan: function(){
			return {x: true, y: false};
		}
		// , onPan: function(){}
		// , customEventsHandler: {}
	});

	////////////////////////////////////////////////////////////////////////////


	////////////////
	// STATISTICS //
	////////////////

	addBarChart(notesCount);

}


// Inserts a Bar Chart SVG component that plots the data given as a dictionary 
//   of the form { key: value, key: value, ... }
function addBarChart(data) {

	var margin = {top: 40, right: 20, bottom: 30, left: 40},
	width = 600 - margin.left - margin.right,
	height = 200 - margin.top - margin.bottom;

	var x = d3.scale.ordinal()
	    .rangeRoundBands([0, width], .1);

	var y = d3.scale.linear()
	    .range([height, 0]);

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");

	// global
	tip = d3.tip()
		.attr('class', 'd3-tip')
		.offset([-10, 0])
		.html(function(d) {
			return "<strong>Count:</strong> <span style='color:red'>" + data[d] + "</span>";
		});

	var width = width + margin.left + margin.right;

	var container = d3.select("#container").append("div")
		.attr("class", "centralized")
		.style("width", width+"px")
		// .style("background-color", "#444444");

	var chartSvg = container.append("svg")
		.attr("class", "barchart")
	    .attr("width", width)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	chartSvg.call(tip);

	x.domain(Object.keys(data));
	y.domain([0, d3.max(Object.keys(data), function(d) { return data[d]; }) ]);

	chartSvg.append("g")
		.attr("class", "x axis")
		.attr("transform", "translate(0," + height + ")")
		.call(xAxis);

	chartSvg.append("g")
		.attr("class", "y axis")
		.call(yAxis)
		.append("text")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.attr("font-size", "0.6em")
			.style("text-anchor", "end")
			.text("Nb notes");

	chartSvg.selectAll(".bar")
		.data(Object.keys(data))
		.enter().append("rect")
		.attr("class", function(d) { return "bar note_"+d;  })
		.attr("x", function(d) { return x(d); })
		.attr("width", x.rangeBand())
		.attr("y", function(d) { return y(data[d]); })
		.attr("height", function(d) { return height - y(data[d]); })
      	.on("mouseout", function(d) { 
  			tip.hide(d);
  			highlightNoteClass(this.getAttribute("class").split(" ")[1]);
		})
      	.on("mouseover", function(d) { 
  			tip.show(d);
  			unhighlightNoteClass(this.getAttribute("class").split(" ")[1]);
		});

}