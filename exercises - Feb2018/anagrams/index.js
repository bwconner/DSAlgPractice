// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	//Remove all spaces and punctuation
	//Split each string into an array
	//Sort that array by value
	//Join that array back into a string
	//Make that string all lowercase to ignore any capitilization
	//Compare strings and return that boolean value
	stringA = stringA.replace(/[^\w]/g, '').split('').sort().join('').toLowerCase();
	stringB = stringB.replace(/[^\w]/g, '').split('').sort().join('').toLowerCase();

	return stringA === stringB;
}

module.exports = anagrams;
