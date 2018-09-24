// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	let charMap = {};

	//Create JS Object holding the count of each character
	for (var char of str) {
		if (charMap[char]) {
			charMap[char] = charMap[char] + 1;
		} else {
			charMap[char] = 1;
		}
	}


	let maxChar = '';
	let maxCount = 0;

	for (char in charMap) {
		if (maxCount < charMap[char]) {
			maxCount = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;
