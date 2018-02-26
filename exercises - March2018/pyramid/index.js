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
	var width = 2 * n - 1;
	var row = 1;
	var output = ""
	var midpoint = Math.floor(width/2);

	while (row <= n) {
		for (var i = 0; i < width; i++) {
			if(i <= midpoint - row || i >= midpoint + row) {
				output += ' ';
			} else {
				output += '#';
			}
		}
		
		console.log(output);
		output = "";
		row++;
	}

}

module.exports = pyramid;
