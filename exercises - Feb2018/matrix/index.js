// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
	var results = [];
	
	//Creates the number of arrays needed based on n
	//And pushes them into our blank results array
	for (var i = 0; i < n; i++) {
		results.push([]);
	}

	var counter = 1;
	var startColumn = 0;
	var endColumn = n - 1;
	var startRow = 0;
	var endRow = n - 1;

	while (startColumn <= endColumn && startRow <= endRow) {
		//Top Row
		for (var i = startColumn; i <= endColumn; i++) {
			results[startRow][i] = counter;
			counter++;
		}

		startRow++; //Move the start row down one

		//Right hand side going down
		for (var i = startRow; i <= endRow; i++) {
			results[i][endColumn] = counter;
			counter++;
		}

		endColumn--; //Move right hand side in one

		//Bottom Row
		for (var i = endColumn; i >= startColumn; i--) {
			results[endRow][i] = counter;
			counter++;
		}

		endRow--; //Move end row up one

		//Left hand side going up
		for (var i = endRow; i >= startRow; i--) {
			results[i][startColumn] = counter;
			counter++;
		}

		startColumn++; //Move left hand side in one column
	}

	return results;
}

module.exports = matrix;
