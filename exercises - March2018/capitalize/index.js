// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var capitalized = str.split('');
	capitalized[0] = capitalized[0].toUpperCase();

	for (var i = 1; i < str.length; i++) {
		if (capitalized[i - 1] === ' ') {
			capitalized[i] = capitalized[i].toUpperCase();
		}
	}

	return capitalized.join('');
}

module.exports = capitalize;
