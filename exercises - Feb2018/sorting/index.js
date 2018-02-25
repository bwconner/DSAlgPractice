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
	if (arr.length === 1) {
		return arr;
	}

	var center = Math.floor(arr.length/2); //Find Mid Point of Array
	var left = arr.slice(0, center);
	var right = arr.slice(center, arr.length);

	return merge(mergeSort(left), mergeSort(right)); //Merge all of these recursively called miniture arrays now sorted
}

function merge(left, right) {
	var results = [];

	while (left.length && right.length) {
		if (left[0] < right[0]) {
			results.push(left.shift()); //Left was less, push its first element onto results
		} else {
			results.push(right.shift());  //Right was less, push its first element onto results
		}
	}

	return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge  };
