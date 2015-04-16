// require([
// 	// "lib/d3.min",
// 	// "lib/d3tip",
// 	"scales"
// ]);

// thanks to http://www.cs.cmu.edu/~scottd/chords_and_scales/music.html
var scales = {
	"C Major": ["C","D","E","F","G","A","B"],
	"C# Major": ["C#","D#","F","F#","G#","A#","C"],
	"D Major": ["D","E","F#","G","A","B","C#"],
	"D# Major": ["D#","F","G","G#","A#","C","D"],
	"E Major": ["E","F#","G#","A","B","C#","D#"],
	"F Major": ["F","G","A","A#","C","D","E"],
	"F# Major": ["F#","G#","A#","B","C#","D#","F"],
	"G Major": ["G","A","B","C","D","E","F#"],
	"G# Major": ["G#","A#","C","C#","D#","F","G"],
	"A Major": ["A","B","C#","D","E","F#","G#"],
	"A# Major": ["A#","C","D","D#","F","G","A"],
	"B Major": ["B","C#","D#","E","F#","G#","A#"],
	"C natural minor": ["C","D","D#","F","G","G#","A#"],
	"C# natural minor": ["C#","D#","E","F#","G#","A","B"],
	"D natural minor": ["D","E","F","G","A","A#","C"],
	"D# natural minor": ["D#","F","F#","G#","A#","B","C#"],
	"E natural minor": ["E","F#","G","A","B","C","D"],
	"F natural minor": ["F","G","G#","A#","C","C#","D#"],
	"F# natural minor": ["F#","G#","A","B","C#","D","E"],
	"G natural minor": ["G","A","A#","C","D","D#","F"],
	"G# natural minor": ["G#","A#","B","C#","D#","E","F#"],
	"A natural minor": ["A","B","C","D","E","F","G"],
	"A# natural minor": ["A#","C","C#","D#","F","F#","G#"],
	"B natural minor": ["B","C#","D","E","F#","G","A"],
	"C harmonic minor": ["C","D","D#","F","G","G#","B"],
	"C# harmonic minor": ["C#","D#","E","F#","G#","A","C"],
	"D harmonic minor": ["D","E","F","G","A","A#","C#"],
	"D# harmonic minor": ["D#","F","F#","G#","A#","B","D"],
	"E harmonic minor": ["E","F#","G","A","B","C","D#"],
	"F harmonic minor": ["F","G","G#","A#","C","C#","E"],
	"F# harmonic minor": ["F#","G#","A","B","C#","D","F"],
	"G harmonic minor": ["G","A","A#","C","D","D#","F#"],
	"G# harmonic minor": ["G#","A#","B","C#","D#","E","G"],
	"A harmonic minor": ["A","B","C","D","E","F","G#"],
	"A# harmonic minor": ["A#","C","C#","D#","F","F#","A"],
	"B harmonic minor": ["B","C#","D","E","F#","G","A#"],
	"C melodic minor": ["C","D","D#","F","G","A","B"],
	"C# melodic minor": ["C#","D#","E","F#","G#","A#","C"],
	"D melodic minor": ["D","E","F","G","A","B","C#"],
	"D# melodic minor": ["D#","F","F#","G#","A#","C","D"],
	"E melodic minor": ["E","F#","G","A","B","C#","D#"],
	"F melodic minor": ["F","G","G#","A#","C","D","E"],
	"F# melodic minor": ["F#","G#","A","B","C#","D#","F"],
	"G melodic minor": ["G","A","A#","C","D","E","F#"],
	"G# melodic minor": ["G#","A#","B","C#","D#","F","G"],
	"A melodic minor": ["A","B","C","D","E","F#","G#"],
	"A# melodic minor": ["A#","C","C#","D#","F","G","A"],
	"B melodic minor": ["B","C#","D","E","F#","G#","A#"],
	"C major pentatonic": ["C","D","E","G","A"],
	"C# major pentatonic": ["C#","D#","F","G#","A#"],
	"D major pentatonic": ["D","E","F#","A","B"],
	"D# major pentatonic": ["D#","F","G","A#","C"],
	"E major pentatonic": ["E","F#","G#","B","C#"],
	"F major pentatonic": ["F","G","A","C","D"],
	"F# major pentatonic": ["F#","G#","A#","C#","D#"],
	"G major pentatonic": ["G","A","B","D","E"],
	"G# major pentatonic": ["G#","A#","C","D#","F"],
	"A major pentatonic": ["A","B","C#","E","F#"],
	"A# major pentatonic": ["A#","C","D","F","G"],
	"B major pentatonic": ["B","C#","D#","F#","G#"],
	"C minor pentatonic": ["C","D#","F","G","A#"],
	"C# minor pentatonic": ["C#","E","F#","G#","B"],
	"D minor pentatonic": ["D","F","G","A","C"],
	"D# minor pentatonic": ["D#","F#","G#","A#","C#"],
	"E minor pentatonic": ["E","G","A","B","D"],
	"F minor pentatonic": ["F","G#","A#","C","D#"],
	"F# minor pentatonic": ["F#","A","B","C#","E"],
	"G minor pentatonic": ["G","A#","C","D","F"],
	"G# minor pentatonic": ["G#","B","C#","D#","F#"],
	"A minor pentatonic": ["A","C","D","E","G"],
	"A# minor pentatonic": ["A#","C#","D#","F","G#"],
	"B minor pentatonic": ["B","D","E","F#","A"],
	"C blues": ["C","D#","F","F#","G","A#"],
	"C# blues": ["C#","E","F#","G","G#","B"],
	"D blues": ["D","F","G","G#","A","C"],
	"D# blues": ["D#","F#","G#","A","A#","C#"],
	"E blues": ["E","G","A","A#","B","D"],
	"F blues": ["F","G#","A#","B","C","D#"],
	"F# blues": ["F#","A","B","C","C#","E"],
	"G blues": ["G","A#","C","C#","D","F"],
	"G# blues": ["G#","B","C#","D","D#","F#"],
	"A blues": ["A","C","D","D#","E","G"],
	"A# blues": ["A#","C#","D#","E","F","G#"],
	"B blues": ["B","D","E","F","F#","A"],
	"C minor blues": ["C","D","D#","F","F#","G","G#","A#"],
	"C# minor blues": ["C#","D#","E","F#","G","G#","A","B"],
	"D minor blues": ["D","E","F","G","G#","A","A#","C"],
	"D# minor blues": ["D#","F","F#","G#","A","A#","B","C#"],
	"E minor blues": ["E","F#","G","A","A#","B","C","D"],
	"F minor blues": ["F","G","G#","A#","B","C","C#","D#"],
	"F# minor blues": ["F#","G#","A","B","C","C#","D","E"],
	"G minor blues": ["G","A","A#","C","C#","D","D#","F"],
	"G# minor blues": ["G#","A#","B","C#","D","D#","E","F#"],
	"A minor blues": ["A","B","C","D","D#","E","F","G"],
	"A# minor blues": ["A#","C","C#","D#","E","F","F#","G#"],
	"B minor blues": ["B","C#","D","E","F","F#","G","A"],
	"C major blues": ["C","D","D#","E","F","F#","G","A","A#"],
	"C# major blues": ["C#","D#","E","F","F#","G","G#","A#","B"],
	"D major blues": ["D","E","F","F#","G","G#","A","B","C"],
	"D# major blues": ["D#","F","F#","G","G#","A","A#","C","C#"],
	"E major blues": ["E","F#","G","G#","A","A#","B","C#","D"],
	"F major blues": ["F","G","G#","A","A#","B","C","D","D#"],
	"F# major blues": ["F#","G#","A","A#","B","C","C#","D#","E"],
	"G major blues": ["G","A","A#","B","C","C#","D","E","F"],
	"G# major blues": ["G#","A#","B","C","C#","D","D#","F","F#"],
	"A major blues": ["A","B","C","C#","D","D#","E","F#","G"],
	"A# major blues": ["A#","C","C#","D","D#","E","F","G","G#"],
	"B major blues": ["B","C#","D","D#","E","F","F#","G#","A"],
	"C augmented": ["C","D","E","F#","G#","A#"],
	"C# augmented": ["C#","D#","F","G","A","B"],
	"D augmented": ["D","E","F#","G#","A#","C"],
	"D# augmented": ["D#","F","G","A","B","C#"],
	"E augmented": ["E","F#","G#","A#","C","D"],
	"F augmented": ["F","G","A","B","C#","D#"],
	"F# augmented": ["F#","G#","A#","C","D","E"],
	"G augmented": ["G","A","B","C#","D#","F"],
	"G# augmented": ["G#","A#","C","D","E","F#"],
	"A augmented": ["A","B","C#","D#","F","G"],
	"A# augmented": ["A#","C","D","E","F#","G#"],
	"B augmented": ["B","C#","D#","F","G","A"],
	"C diminished": ["C","D","D#","F","F#","G#","A","B"],
	"C# diminished": ["C#","D#","E","F#","G","A","A#","C"],
	"D diminished": ["D","E","F","G","G#","A#","B","C#"],
	"D# diminished": ["D#","F","F#","G#","A","B","C","D"],
	"E diminished": ["E","F#","G","A","A#","C","C#","D#"],
	"F diminished": ["F","G","G#","A#","B","C#","D","E"],
	"F# diminished": ["F#","G#","A","B","C","D","D#","F"],
	"G diminished": ["G","A","A#","C","C#","D#","E","F#"],
	"G# diminished": ["G#","A#","B","C#","D","E","F","G"],
	"A diminished": ["A","B","C","D","D#","F","F#","G#"],
	"A# diminished": ["A#","C","C#","D#","E","F#","G","A"],
	"B diminished": ["B","C#","D","E","F","G","G#","A#"],
	"C Phrygian-Dominant": ["C","C#","E","F","G","G#","A#"],
	"C# Phrygian-Dominant": ["C#","D","F","F#","G#","A","B"],
	"D Phrygian-Dominant": ["D","D#","F#","G","A","A#","C"],
	"D# Phrygian-Dominant": ["D#","E","G","G#","A#","B","C#"],
	"E Phrygian-Dominant": ["E","F","G#","A","B","C","D"],
	"F Phrygian-Dominant": ["F","F#","A","A#","C","C#","D#"],
	"F# Phrygian-Dominant": ["F#","G","A#","B","C#","D","E"],
	"G Phrygian-Dominant": ["G","G#","B","C","D","D#","F"],
	"G# Phrygian-Dominant": ["G#","A","C","C#","D#","E","F#"],
	"A Phrygian-Dominant": ["A","A#","C#","D","E","F","G"],
	"A# Phrygian-Dominant": ["A#","B","D","D#","F","F#","G#"],
	"B Phrygian-Dominant": ["B","C","D#","E","F#","G","A"],
	// "C Dorian": ["C","D","D#","F","G","A","A#"],
	// "C# Dorian": ["C#","D#","E","F#","G#","A#","B"],
	// "D Dorian": ["D","E","F","G","A","B","C"],
	// "D# Dorian": ["D#","F","F#","G#","A#","C","C#"],
	// "E Dorian": ["E","F#","G","A","B","C#","D"],
	// "F Dorian": ["F","G","G#","A#","C","D","D#"],
	// "F# Dorian": ["F#","G#","A","B","C#","D#","E"],
	// "G Dorian": ["G","A","A#","C","D","E","F"],
	// "G# Dorian": ["G#","A#","B","C#","D#","F","F#"],
	// "A Dorian": ["A","B","C","D","E","F#","G"],
	// "A# Dorian": ["A#","C","C#","D#","F","G","G#"],
	// "B Dorian": ["B","C#","D","E","F#","G#","A"],
	// "C Phrygian": ["C","C#","D#","F","G","G#","A#"],
	// "C# Phrygian": ["C#","D","E","F#","G#","A","B"],
	// "D Phrygian": ["D","D#","F","G","A","A#","C"],
	// "D# Phrygian": ["D#","E","F#","G#","A#","B","C#"],
	// "E Phrygian": ["E","F","G","A","B","C","D"],
	// "F Phrygian": ["F","F#","G#","A#","C","C#","D#"],
	// "F# Phrygian": ["F#","G","A","B","C#","D","E"],
	// "G Phrygian": ["G","G#","A#","C","D","D#","F"],
	// "G# Phrygian": ["G#","A","B","C#","D#","E","F#"],
	// "A Phrygian": ["A","A#","C","D","E","F","G"],
	// "A# Phrygian": ["A#","B","C#","D#","F","F#","G#"],
	// "B Phrygian": ["B","C","D","E","F#","G","A"],
	// "C Lydian": ["C","D","E","F#","G","A","B"],
	// "C# Lydian": ["C#","D#","F","G","G#","A#","C"],
	// "D Lydian": ["D","E","F#","G#","A","B","C#"],
	// "D# Lydian": ["D#","F","G","A","A#","C","D"],
	// "E Lydian": ["E","F#","G#","A#","B","C#","D#"],
	// "F Lydian": ["F","G","A","B","C","D","E"],
	// "F# Lydian": ["F#","G#","A#","C","C#","D#","F"],
	// "G Lydian": ["G","A","B","C#","D","E","F#"],
	// "G# Lydian": ["G#","A#","C","D","D#","F","G"],
	// "A Lydian": ["A","B","C#","D#","E","F#","G#"],
	// "A# Lydian": ["A#","C","D","E","F","G","A"],
	// "B Lydian": ["B","C#","D#","F","F#","G#","A#"],
	// "C Mixolydian": ["C","D","E","F","G","A","A#"],
	// "C# Mixolydian": ["C#","D#","F","F#","G#","A#","B"],
	// "D Mixolydian": ["D","E","F#","G","A","B","C"],
	// "D# Mixolydian": ["D#","F","G","G#","A#","C","C#"],
	// "E Mixolydian": ["E","F#","G#","A","B","C#","D"],
	// "F Mixolydian": ["F","G","A","A#","C","D","D#"],
	// "F# Mixolydian": ["F#","G#","A#","B","C#","D#","E"],
	// "G Mixolydian": ["G","A","B","C","D","E","F"],
	// "G# Mixolydian": ["G#","A#","C","C#","D#","F","F#"],
	// "A Mixolydian": ["A","B","C#","D","E","F#","G"],
	// "A# Mixolydian": ["A#","C","D","D#","F","G","G#"],
	// "B Mixolydian": ["B","C#","D#","E","F#","G#","A"],
	// "C Locrian": ["C","C#","D#","F","F#","G#","A#"],
	// "C# Locrian": ["C#","D","E","F#","G","A","B"],
	// "D Locrian": ["D","D#","F","G","G#","A#","C"],
	// "D# Locrian": ["D#","E","F#","G#","A","B","C#"],
	// "E Locrian": ["E","F","G","A","A#","C","D"],
	// "F Locrian": ["F","F#","G#","A#","B","C#","D#"],
	// "F# Locrian": ["F#","G","A","B","C","D","E"],
	// "G Locrian": ["G","G#","A#","C","C#","D#","F"],
	// "G# Locrian": ["G#","A","B","C#","D","E","F#"],
	// "A Locrian": ["A","A#","C","D","D#","F","G"],
	// "A# Locrian": ["A#","B","C#","D#","E","F#","G#"],
	// "B Locrian": ["B","C","D","E","F","G","A"],
	// "C jazz melodic minor": ["C","D","D#","F","G","A","B"],
	// "C# jazz melodic minor": ["C#","D#","E","F#","G#","A#","C"],
	// "D jazz melodic minor": ["D","E","F","G","A","B","C#"],
	// "D# jazz melodic minor": ["D#","F","F#","G#","A#","C","D"],
	// "E jazz melodic minor": ["E","F#","G","A","B","C#","D#"],
	// "F jazz melodic minor": ["F","G","G#","A#","C","D","E"],
	// "F# jazz melodic minor": ["F#","G#","A","B","C#","D#","F"],
	// "G jazz melodic minor": ["G","A","A#","C","D","E","F#"],
	// "G# jazz melodic minor": ["G#","A#","B","C#","D#","F","G"],
	// "A jazz melodic minor": ["A","B","C","D","E","F#","G#"],
	// "A# jazz melodic minor": ["A#","C","C#","D#","F","G","A"],
	// "B jazz melodic minor": ["B","C#","D","E","F#","G#","A#"],
	// "C Dorian b2": ["C","C#","D#","F","G","A","A#"],
	// "C# Dorian b2": ["C#","D","E","F#","G#","A#","B"],
	// "D Dorian b2": ["D","D#","F","G","A","B","C"],
	// "D# Dorian b2": ["D#","E","F#","G#","A#","C","C#"],
	// "E Dorian b2": ["E","F","G","A","B","C#","D"],
	// "F Dorian b2": ["F","F#","G#","A#","C","D","D#"],
	// "F# Dorian b2": ["F#","G","A","B","C#","D#","E"],
	// "G Dorian b2": ["G","G#","A#","C","D","E","F"],
	// "G# Dorian b2": ["G#","A","B","C#","D#","F","F#"],
	// "A Dorian b2": ["A","A#","C","D","E","F#","G"],
	// "A# Dorian b2": ["A#","B","C#","D#","F","G","G#"],
	// "B Dorian b2": ["B","C","D","E","F#","G#","A"],
	// "C Lydian augmented": ["C","D","E","F#","G#","A","B"],
	// "C# Lydian augmented": ["C#","D#","F","G","A","A#","C"],
	// "D Lydian augmented": ["D","E","F#","G#","A#","B","C#"],
	// "D# Lydian augmented": ["D#","F","G","A","B","C","D"],
	// "E Lydian augmented": ["E","F#","G#","A#","C","C#","D#"],
	// "F Lydian augmented": ["F","G","A","B","C#","D","E"],
	// "F# Lydian augmented": ["F#","G#","A#","C","D","D#","F"],
	// "G Lydian augmented": ["G","A","B","C#","D#","E","F#"],
	// "G# Lydian augmented": ["G#","A#","C","D","E","F","G"],
	// "A Lydian augmented": ["A","B","C#","D#","F","F#","G#"],
	// "A# Lydian augmented": ["A#","C","D","E","F#","G","A"],
	// "B Lydian augmented": ["B","C#","D#","F","G","G#","A#"],
	// "C Lydian b7": ["C","D","E","F#","G","A","A#"],
	// "C# Lydian b7": ["C#","D#","F","G","G#","A#","B"],
	// "D Lydian b7": ["D","E","F#","G#","A","B","C"],
	// "D# Lydian b7": ["D#","F","G","A","A#","C","C#"],
	// "E Lydian b7": ["E","F#","G#","A#","B","C#","D"],
	// "F Lydian b7": ["F","G","A","B","C","D","D#"],
	// "F# Lydian b7": ["F#","G#","A#","C","C#","D#","E"],
	// "G Lydian b7": ["G","A","B","C#","D","E","F"],
	// "G# Lydian b7": ["G#","A#","C","D","D#","F","F#"],
	// "A Lydian b7": ["A","B","C#","D#","E","F#","G"],
	// "A# Lydian b7": ["A#","C","D","E","F","G","G#"],
	// "B Lydian b7": ["B","C#","D#","F","F#","G#","A"],
	// "C Mixolydian b13": ["C","D","E","F","G","G#","A#"],
	// "C# Mixolydian b13": ["C#","D#","F","F#","G#","A","B"],
	// "D Mixolydian b13": ["D","E","F#","G","A","A#","C"],
	// "D# Mixolydian b13": ["D#","F","G","G#","A#","B","C#"],
	// "E Mixolydian b13": ["E","F#","G#","A","B","C","D"],
	// "F Mixolydian b13": ["F","G","A","A#","C","C#","D#"],
	// "F# Mixolydian b13": ["F#","G#","A#","B","C#","D","E"],
	// "G Mixolydian b13": ["G","A","B","C","D","D#","F"],
	// "G# Mixolydian b13": ["G#","A#","C","C#","D#","E","F#"],
	// "A Mixolydian b13": ["A","B","C#","D","E","F","G"],
	// "A# Mixolydian b13": ["A#","C","D","D#","F","F#","G#"],
	// "B Mixolydian b13": ["B","C#","D#","E","F#","G","A"],
	// "C Locrian #2": ["C","D","D#","F","F#","G#","A#"],
	// "C# Locrian #2": ["C#","D#","E","F#","G","A","B"],
	// "D Locrian #2": ["D","E","F","G","G#","A#","C"],
	// "D# Locrian #2": ["D#","F","F#","G#","A","B","C#"],
	// "E Locrian #2": ["E","F#","G","A","A#","C","D"],
	// "F Locrian #2": ["F","G","G#","A#","B","C#","D#"],
	// "F# Locrian #2": ["F#","G#","A","B","C","D","E"],
	// "G Locrian #2": ["G","A","A#","C","C#","D#","F"],
	// "G# Locrian #2": ["G#","A#","B","C#","D","E","F#"],
	// "A Locrian #2": ["A","B","C","D","D#","F","G"],
	// "A# Locrian #2": ["A#","C","C#","D#","E","F#","G#"],
	// "B Locrian #2": ["B","C#","D","E","F","G","A"],
	// "C super Locrian": ["C","C#","D#","E","F#","G#","A#"],
	// "C# super Locrian": ["C#","D","E","F","G","A","B"],
	// "D super Locrian": ["D","D#","F","F#","G#","A#","C"],
	// "D# super Locrian": ["D#","E","F#","G","A","B","C#"],
	// "E super Locrian": ["E","F","G","G#","A#","C","D"],
	// "F super Locrian": ["F","F#","G#","A","B","C#","D#"],
	// "F# super Locrian": ["F#","G","A","A#","C","D","E"],
	// "G super Locrian": ["G","G#","A#","B","C#","D#","F"],
	// "G# super Locrian": ["G#","A","B","C","D","E","F#"],
	// "A super Locrian": ["A","A#","C","C#","D#","F","G"],
	// "A# super Locrian": ["A#","B","C#","D","E","F#","G#"],
	// "B super Locrian": ["B","C","D","D#","F","G","A"],
	// "C whole half diminished": ["C","D","D#","F","F#","G#","A","B"],
	// "C# whole half diminished": ["C#","D#","E","F#","G","A","A#","C"],
	// "D whole half diminished": ["D","E","F","G","G#","A#","B","C#"],
	// "D# whole half diminished": ["D#","F","F#","G#","A","B","C","D"],
	// "E whole half diminished": ["E","F#","G","A","A#","C","C#","D#"],
	// "F whole half diminished": ["F","G","G#","A#","B","C#","D","E"],
	// "F# whole half diminished": ["F#","G#","A","B","C","D","D#","F"],
	// "G whole half diminished": ["G","A","A#","C","C#","D#","E","F#"],
	// "G# whole half diminished": ["G#","A#","B","C#","D","E","F","G"],
	// "A whole half diminished": ["A","B","C","D","D#","F","F#","G#"],
	// "A# whole half diminished": ["A#","C","C#","D#","E","F#","G","A"],
	// "B whole half diminished": ["B","C#","D","E","F","G","G#","A#"],
	// "C half whole diminished": ["C","C#","D#","E","F#","G","A","A#"],
	// "C# half whole diminished": ["C#","D","E","F","G","G#","A#","B"],
	// "D half whole diminished": ["D","D#","F","F#","G#","A","B","C"],
	// "D# half whole diminished": ["D#","E","F#","G","A","A#","C","C#"],
	// "E half whole diminished": ["E","F","G","G#","A#","B","C#","D"],
	// "F half whole diminished": ["F","F#","G#","A","B","C","D","D#"],
	// "F# half whole diminished": ["F#","G","A","A#","C","C#","D#","E"],
	// "G half whole diminished": ["G","G#","A#","B","C#","D","E","F"],
	// "G# half whole diminished": ["G#","A","B","C","D","D#","F","F#"],
	// "A half whole diminished": ["A","A#","C","C#","D#","E","F#","G"],
	// "A# half whole diminished": ["A#","B","C#","D","E","F","G","G#"],
	// "B half whole diminished": ["B","C","D","D#","F","F#","G#","A"],
	"C enigmatic": ["C","C#","E","F#","G#","A#","B"],
	"C# enigmatic": ["C#","D","F","G","A","B","C"],
	"D enigmatic": ["D","D#","F#","G#","A#","C","C#"],
	"D# enigmatic": ["D#","E","G","A","B","C#","D"],
	"E enigmatic": ["E","F","G#","A#","C","D","D#"],
	"F enigmatic": ["F","F#","A","B","C#","D#","E"],
	"F# enigmatic": ["F#","G","A#","C","D","E","F"],
	"G enigmatic": ["G","G#","B","C#","D#","F","F#"],
	"G# enigmatic": ["G#","A","C","D","E","F#","G"],
	"A enigmatic": ["A","A#","C#","D#","F","G","G#"],
	"A# enigmatic": ["A#","B","D","E","F#","G#","A"],
	"B enigmatic": ["B","C","D#","F","G","A","A#"],
	// "C double harmonic": ["C","C#","E","F","G","G#","B"],
	// "C# double harmonic": ["C#","D","F","F#","G#","A","C"],
	// "D double harmonic": ["D","D#","F#","G","A","A#","C#"],
	// "D# double harmonic": ["D#","E","G","G#","A#","B","D"],
	// "E double harmonic": ["E","F","G#","A","B","C","D#"],
	// "F double harmonic": ["F","F#","A","A#","C","C#","E"],
	// "F# double harmonic": ["F#","G","A#","B","C#","D","F"],
	// "G double harmonic": ["G","G#","B","C","D","D#","F#"],
	// "G# double harmonic": ["G#","A","C","C#","D#","E","G"],
	// "A double harmonic": ["A","A#","C#","D","E","F","G#"],
	// "A# double harmonic": ["A#","B","D","D#","F","F#","A"],
	// "B double harmonic": ["B","C","D#","E","F#","G","A#"],
	// "C Hungarian minor": ["C","D","D#","F#","G","G#","B"],
	// "C# Hungarian minor": ["C#","D#","E","G","G#","A","C"],
	// "D Hungarian minor": ["D","E","F","G#","A","A#","C#"],
	// "D# Hungarian minor": ["D#","F","F#","A","A#","B","D"],
	// "E Hungarian minor": ["E","F#","G","A#","B","C","D#"],
	// "F Hungarian minor": ["F","G","G#","B","C","C#","E"],
	// "F# Hungarian minor": ["F#","G#","A","C","C#","D","F"],
	// "G Hungarian minor": ["G","A","A#","C#","D","D#","F#"],
	// "G# Hungarian minor": ["G#","A#","B","D","D#","E","G"],
	// "A Hungarian minor": ["A","B","C","D#","E","F","G#"],
	// "A# Hungarian minor": ["A#","C","C#","E","F","F#","A"],
	// "B Hungarian minor": ["B","C#","D","F","F#","G","A#"],
	// "C Persian": ["C","C#","E","F","F#","G#","B"],
	// "C# Persian": ["C#","D","F","F#","G","A","C"],
	// "D Persian": ["D","D#","F#","G","G#","A#","C#"],
	// "D# Persian": ["D#","E","G","G#","A","B","D"],
	// "E Persian": ["E","F","G#","A","A#","C","D#"],
	// "F Persian": ["F","F#","A","A#","B","C#","E"],
	// "F# Persian": ["F#","G","A#","B","C","D","F"],
	// "G Persian": ["G","G#","B","C","C#","D#","F#"],
	// "G# Persian": ["G#","A","C","C#","D","E","G"],
	// "A Persian": ["A","A#","C#","D","D#","F","G#"],
	// "A# Persian": ["A#","B","D","D#","E","F#","A"],
	// "B Persian": ["B","C","D#","E","F","G","A#"],
	// "C Arabian": ["C","D","E","F","F#","G#","A#"],
	// "C# Arabian": ["C#","D#","F","F#","G","A","B"],
	// "D Arabian": ["D","E","F#","G","G#","A#","C"],
	// "D# Arabian": ["D#","F","G","G#","A","B","C#"],
	// "E Arabian": ["E","F#","G#","A","A#","C","D"],
	// "F Arabian": ["F","G","A","A#","B","C#","D#"],
	// "F# Arabian": ["F#","G#","A#","B","C","D","E"],
	// "G Arabian": ["G","A","B","C","C#","D#","F"],
	// "G# Arabian": ["G#","A#","C","C#","D","E","F#"],
	// "A Arabian": ["A","B","C#","D","D#","F","G"],
	// "A# Arabian": ["A#","C","D","D#","E","F#","G#"],
	// "B Arabian": ["B","C#","D#","E","F","G","A"],
	// "C Japanese": ["C","C#","F","G","G#"],
	// "C# Japanese": ["C#","D","F#","G#","A"],
	// "D Japanese": ["D","D#","G","A","A#"],
	// "D# Japanese": ["D#","E","G#","A#","B"],
	// "E Japanese": ["E","F","A","B","C"],
	// "F Japanese": ["F","F#","A#","C","C#"],
	// "F# Japanese": ["F#","G","B","C#","D"],
	// "G Japanese": ["G","G#","C","D","D#"],
	// "G# Japanese": ["G#","A","C#","D#","E"],
	// "A Japanese": ["A","A#","D","E","F"],
	// "A# Japanese": ["A#","B","D#","F","F#"],
	// "B Japanese": ["B","C","E","F#","G"],
	// "C Egyptian": ["C","D","F","G","A#"],
	// "C# Egyptian": ["C#","D#","F#","G#","B"],
	// "D Egyptian": ["D","E","G","A","C"],
	// "D# Egyptian": ["D#","F","G#","A#","C#"],
	// "E Egyptian": ["E","F#","A","B","D"],
	// "F Egyptian": ["F","G","A#","C","D#"],
	// "F# Egyptian": ["F#","G#","B","C#","E"],
	// "G Egyptian": ["G","A","C","D","F"],
	// "G# Egyptian": ["G#","A#","C#","D#","F#"],
	// "A Egyptian": ["A","B","D","E","G"],
	// "A# Egyptian": ["A#","C","D#","F","G#"],
	// "B Egyptian": ["B","C#","E","F#","A"],
	// "C Hirajoshi": ["C","D","D#","G","G#"],
	// "C# Hirajoshi": ["C#","D#","E","G#","A"],
	// "D Hirajoshi": ["D","E","F","A","A#"],
	// "D# Hirajoshi": ["D#","F","F#","A#","B"],
	// "E Hirajoshi": ["E","F#","G","B","C"],
	// "F Hirajoshi": ["F","G","G#","C","C#"],
	// "F# Hirajoshi": ["F#","G#","A","C#","D"],
	// "G Hirajoshi": ["G","A","A#","D","D#"],
	// "G# Hirajoshi": ["G#","A#","B","D#","E"],
	// "A Hirajoshi": ["A","B","C","E","F"],
	// "A# Hirajoshi": ["A#","C","C#","F","F#"],
	// "B Hirajoshi": ["B","C#","D","F#","G"]
};

// --
function collapseScales(listOfScales) {
	function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a == null || b == null) return false;
	  if (a.length != b.length) return false;

	  a.sort();
	  b.sort();

	  for (var i = 0; i < a.length; ++i) {
	    if (a[i] !== b[i]) return false;
	  }
	  return true;
	}

	var collapsedScales = {};

	Object.keys(listOfScales).forEach( function(s1) {
		var names = s1;
		var scalesBuffer = Object.keys(listOfScales);

		scalesBuffer.forEach( function(s2) {

			if (arraysEqual(listOfScales[s1],listOfScales[s2])) {
				if(s2 != s1) {
					names += " / " + s2;
					delete s2;
				}
			}		

		});

		collapsedScales[names] = listOfScales[s1];

		// Print result
		// console.log("\"" + names + "\": [" + listOfScales[s1] + "]");
	});

	return collapsedScales;
}

scales = collapseScales(scales);

function SongAnalyzer() {

}

var positiveFrequencyScore = function (aScale, notesCount, notesTotal) {
	var score = 0;

	// Calculate frequencies of notes
	var notesFrequencies = {};
	Object.keys(notesCount).forEach( function(i) {
		notesFrequencies[i] = notesCount[i]/notesTotal;
 	});

	scales[aScale].forEach(function(aNote) {
		if (notesFrequencies[aNote]) {
			score += notesFrequencies[aNote];
		}
	});
	score = (score*100).toFixed(2);

	return score;
}

var balancedNotesCountScore = function (aScale, notesCount, notesTotal) {
	var score = 0;

	var notesOutsideScale = 0;
	Object.keys(notesCount).forEach(function(aNote) {
		var isNoteInScale = scales[aScale].indexOf(aNote) >= 0;
		if (notesCount[aNote] > 0) {
			if (!isNoteInScale) {
				notesOutsideScale++;
			}
			score += notesCount[aNote] * (isNoteInScale ? 1 : -1);
		}
	});

	if(notesOutsideScale > 0) {
		score = 0;
	}

	return score;
}

SongAnalyzer.prototype.guessScale = function (notesCount, notesTotal) {

	var score;
	var scalesWithScores = [];

	// Measure fitting score for all scales
	Object.keys(scales).forEach( function(aScale) {
		score = positiveFrequencyScore(aScale, notesCount, notesTotal);
		// score = balancedNotesCountScore(aScale, notesCount, notesTotal);

		scalesWithScores.push([aScale, score]);

	});

	// Sort scales list with corresponding scores
	scalesWithScores.sort( function(a, b) {return a[1] - b[1];} );

	return scalesWithScores.reverse();
};

// Construct list of positions of notes of the scale
SongAnalyzer.prototype.getScaleNotesPositions = function(aScale) {
	var scaleNotesPositions = [];

	for (var fret=0; fret<nfrets; fret++) {
		for (var string=0; string<nstrings; string++) {
			if (scales[aScale].indexOf(notesMap[string][fret]) >= 0) {
				scaleNotesPositions.push({"fret": fret, "string": string});
				// console.log(fret + "," + string);
			}
		}
	}

	return scaleNotesPositions;
};