//
// guitarConstants.js
//

// Coordinates of the strings in the fretboard image
var stringCoords = [10, 30, 50, 70, 90, 110 ];
var nstrings = stringCoords.length;

var fretWidths = [100, 100, 100, 96, 96, 94, 92, 90, 88, 86, 84, 82, 80, 78, 76, 74, 72, 70, 68, 66, 64, 62, 60, 58];

// Coordinates of the frets in the fretboard image
var fretCoords = [65, 165, 261, 360, 453, 545, 637, 725, 813, 900, 980, 1062, 1140, 1220, 1290, 1365, 1435, 1500, 1570, 1640, 1700, 1765, 1820 ];
// var fretCoords = [65];
// for (var i = 0; i < fretWidths.length; i++) {
// 	fretCoords.push(fretCoords[i]+fretWidths[i]);
// }
var nfrets = fretCoords.length;

// Mapping of all the notes of the fret.
var notesMap = [
	["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"],
	["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],
	["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"],
	["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D"],
	["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A"],
	["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E"]
];