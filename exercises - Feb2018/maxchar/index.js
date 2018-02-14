// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var charCounts = {};

	//Create JS Object holding the count of each character
	for (var char of str) {
		if (charCounts[char]) {
			charCounts[char] = charCounts[char] + 1;
		} else {
			charCounts[char] = 1;
		}
	}

	//Find highest count in created object
	var maxCount = 0;
	var maxCharacter = "";
	for (var char in charCounts) {
		if (maxCount < charCounts[char]) {
			maxCount = charCounts[char];
			maxCharacter = char;
		}
	}

	return maxCharacter;
}

module.exports = maxChar;
