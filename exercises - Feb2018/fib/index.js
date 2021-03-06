// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//Iterative Solution
/*
function fib(n) {
	var sequence = [0, 1]; //The first two will always be 0 and 1, save some time and just set them

	//Starting at 2 start calculating fib until i = n 
	//If n < 2, this loop will just be skipped and sequence[n] will just be returned
	for (var i = 2; i <= n; i++) {
		sequence[i] = sequence[i - 2] + sequence[i - 1];
	}

	return(sequence[n]);
}
*/


function memoize(fn) {
	const cache = {};
	return function(...args) { //we dont know how many arguements a memoized function may eventually need, so we use spread notation
		if (cache[args]) {
			return cache[args];
		}
		
		const result = fn.apply(this, args);
		cache[args] = result;

		return result;
	};
}

//Recursive Solution
function fib(n) {
	if (n < 2) {
		return n;
	}
	
	return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

module.exports = fib;
