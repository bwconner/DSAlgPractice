// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
	constructor() {
		this.stackA = new Stack;
		this.stackB = new Stack;
	}

	add(data) {
		this.stackA.push(data);
	}

	remove() {
		while (this.stackA.peek()) {
			this.stackB.push(this.stackA.pop());
		}

		var toRemove = this.stackB.pop(); //Pop off top element of stack B that would normally be the first element of a queue

		while (this.stackB.peek()) {
			this.stackA.push(this.stackB.pop());
		}

		return toRemove;

	}

	peek() {
		while (this.stackA.peek()) {
			this.stackB.push(this.stackA.pop());
		}

		var view = this.stackB.peek(); //Peek the top element of stack B that would normally be the first element of a queue

		while (this.stackB.peek()) {
			this.stackA.push(this.stackB.pop());
		}

		return view;
	}	
}

module.exports = Queue;
