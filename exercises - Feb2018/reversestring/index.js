// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//Short Version
function reverse(str) {
	return str.split("").reverse().join("");
}


/* "Long" Version
function reverse(str) {

	var reversedString = "";

	for (var char of str) {
		reversedString = char + reversedString;
	}

	return reversedString;
}
*/

module.exports = reverse;