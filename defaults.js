//
// defaults.js
//

var SCALE_FACTOR = 1.3;


// Cool colors thanks for http://www.colourlovers.com/palettes
// seeker of truth
// #131313, #1E1E1C, #54382C, #817952, #9A4F32

// True North Analogous
// #8D543C, #974D40, #803D3D, #FFF5EE, #333333

// Ocean Five
// #00A0B0, #6A4A3C, #CC333F, #EB6841, #EDC951

// Giant Goldfish
// #69D2E7, #A7DBD8, #E0E4CC, #F38630, #FA6900

// let them eat cake
// #774F38, #E08E79, #F1D4AF, #ECE5CE, #C5E0DC

var palletes = [
	["#CC333F", "#00A0B0", "#EDC951", "#E08E79"],
	["purple" , "#CC333F",  "#00A0B0", "#EB6841"]
];
var aPallete = palletes[0];

var NOTES_HIGHLIGHT_COLOR = aPallete[0];
var NOTESCOLOR = aPallete[1];
var CURVECOLOR = aPallete[2];
var SCALE_NOTE_COLOR = aPallete[3];

var LINES_WIDTH = 2;
var NOTES_FONT_SIZE = 11;
var SCALE_HIGHTLIGHT_RECT_HEIGHT = 20;

var DEFAULT_NOTES_SIZE = 9;
var DEFAULT_SCALEHIGHLIGHTS_TRANSPARENCY = 0.15;
var DEFAULT_LINES_TRANSPARENCY = 0.1;
var DEFAULT_IMAGE_TRANSPARENCY = 1;