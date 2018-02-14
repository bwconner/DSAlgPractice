// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
	var capitalized = str.split("");


	capitalized[0] = capitalized[0].toUpperCase(); //Alwats capitalize the first letter

	// Starting at the second element check previous characters
	// If previous character is space, capatilize character at current i
	for (i = 1; i < capitalized.length; i++) {
		if (capitalized[i - 1] === " ") {
			capitalized[i] = capitalized[i].toUpperCase();
		} else {
			capitalized[i] = capitalized[i];
		}
	}

	return capitalized.join("");
}

module.exports = capitalize;
