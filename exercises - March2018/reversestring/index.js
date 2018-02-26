// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str) {
	return str.split('').reverse().join('');
}

//Alternative more manual method
//function reverse(str) {
//	var reversedString = [];
//	var i = 0;
//	var j = str.length - 1;
//
//	while (i < str.length) {
//		reversedString[i] = str[j];
//		i++;
//		j--;
//	}
//
//	return reversedString.join('');


module.exports = reverse;
