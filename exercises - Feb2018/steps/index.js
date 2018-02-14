// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
	var column = 0; //Iterates characters across row
	var step = 1; //Keeps track of which step it is on
	var output = "";

	for (var row = 0; row < n; row ++) {

		for (var column = 0; column < n; column++) {
			if (column < step) {
				output += "#";
			} else {
				output += " ";
			}
		}

		step++;
		console.log(output);
		output = ""; //Blank out for next iteration of loop
	}

}

module.exports = steps;
