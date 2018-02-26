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
	var step = 1;
	var output = '';

	while (step <= n) {
		for (var i = 0; i < n; i++) {
			if(i < step) {
				output += '#';
			} else {
				output += ' ';
			}
		}
		step++;
		console.log(output);
		output = '';
	}
}

module.exports = steps;
