// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
	var width = 2 * n - 1; //The max width of a row based on how tall pyramid will be
	var midpoint = Math.floor((width)/2); //Floor because the array is zero based
	var output = "";

	for (var row = 0; row < n; row++) {

		for (var column = 0; column < width; column++) {
			if (midpoint - row <= column && midpoint + row >= column) {
				output += "#";
			} else {
				output += " ";
			}
		}

		console.log(output);
		output = ""; //Reset for next row
	}
}

module.exports = pyramid;
