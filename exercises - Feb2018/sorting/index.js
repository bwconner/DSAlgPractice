// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < (arr.length - i - 1); j++) {
			if (arr[j] > arr[j+1]) {
				const lesser = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = lesser;
			}
		}
	}

	return arr;
}

function selectionSort(arr) {
	for (var i = 0; i < arr.length; i++) {
		var min = i;
		for (var j = i + 1; j < (arr.length); j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}

		if (arr[i] !== arr[min]) {
			var temp = arr[i];
			arr[i] = arr[min];
			arr[min] = temp;
		}
		
	}

	return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
