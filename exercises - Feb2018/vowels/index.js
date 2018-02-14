// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
	var vowelCount = 0;
	var vowels = ["a", "e", "i", "o", "u"];

	for (var char of str) {
		if (vowels.includes(char.toLowerCase())) {
			vowelCount++;
		}
	}

	return vowelCount;
}

module.exports = vowels;
