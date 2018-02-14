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
	var i = 0; // Iterate down to new rows
	var j = 0; //Iterates characters across row
	var step = 1; //Keeps track of which step it is on
	var output = "";

	while (i < n) {
		while (j < step) {
			output += "#";
			j++;
		}

		while (j < n) {
			output += " ";
			j++;
		}

		i++
		step++;
		j = 0; //Reset to zero to begin at start of next row
		console.log(output);
		output = ""; //Blank out for next iteration of loop
	}
}

module.exports = steps;
