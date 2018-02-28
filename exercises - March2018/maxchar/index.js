// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var count = {};

	//Create JS Object holding the count of each character
	for (var char of str) {
		if (count[char]) {
			count[char] = count[char] + 1;
		} else {
			count[char] = 1;
		}
	}

	var maxChar = "";
	var maxCount = 0;

	for (char in count) {
		if (maxCount < count[char]) {
			maxCount = count[char];
			maxChar = char;
		}
	}

	return maxChar;

}

module.exports = maxChar;
