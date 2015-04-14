//
// guitarConstants.js
//

FRET_IMAGE_WIDTH = 1857;
FRET_IMAGE_HEIGHT = 118;

SVG_VPADDING = 20;

// Coordinates of the strings in the fretboard image
var stringCoords = [10, 30, 50, 70, 90, 110 ];
var nstrings = stringCoords.length;

// Apply vertical padding
for(var i=0; i<nstrings; i++) {
	stringCoords[i] += SVG_VPADDING;
}

//                1    2    3    4    5    6    7    8    9    10   11   12    13    14    15    16    17    18    19    20    21    22    23    24
var fretWidths = [100, 99,  98,  96,  96,  92,  90,  90,  85,  84,  84,  80,   78,   76,   74,   74,   70,   69,   66,   64,   63,   60,   60,   58   ];
var fretCoords = [65,  165, 263, 360, 455, 548, 638, 728, 815, 900, 980, 1064, 1143, 1220, 1295, 1368, 1439, 1508, 1575, 1640, 1703, 1764, 1822 ];
// var fretCoords = [65];
// for (var i = 0; i < fretWidths.length; i++) {
// 	fretCoords.push(fretCoords[i]+fretWidths[i]);
// }
var nfrets = fretCoords.length;

// Mapping of all the notes of the fret.
var notesMap = [
	["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb"],
	["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb"],
	["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb"],
	["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db"],
	["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"],
	["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb"]
];