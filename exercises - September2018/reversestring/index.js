// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Using Array Reverse
// function reverse(str) {
// 	let strArr = str.split('');
// 	strArr.reverse();
// 	return strArr.join('');
// }

// Using a wile loop
function reverse(str) {
	let length = (str.length - 1);
	let newString = '';

	while(length >= 0) {
		newString += str[length];
		length--;
	}

	return newString;
}

module.exports = reverse;
