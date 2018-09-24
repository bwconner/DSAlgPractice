// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {

	var chunckedArray = [];
	var chunk = [];

	var i = 0;
	var j = 0;

	// Loop through entire array of elements
	while (i < array.length) {
		// Iterate through sub-sections of array based on size given
		// Create small chunk arrays of given size
		for (k = 0; k < size; k++) {
			if (array[k + i] !== undefined) {
				chunk[k] = array[k + i];
			}
		}
		// Put small chunk arrays into parent array
		chunckedArray[j] = chunk;
		i += size;
		j++;
		chunk = [];
	}

	return chunckedArray;

}

module.exports = chunk;
