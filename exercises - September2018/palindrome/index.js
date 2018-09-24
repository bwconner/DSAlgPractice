// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// Using Array Reverse to Compare
// function palindrome(str) {
// 	const reverse = str.split('').reverse().join('');
// 	return reverse === str;
// }

// Using while loop to build the reverses string
function palindrome(str) {
	let length = str.length - 1;
	let reverseStr = '';

	while (length >= 0) {
		reverseStr += str[length];
		length--;
	}

	return reverseStr === str;
}

module.exports = palindrome;
