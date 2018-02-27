// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor(node) {
		this.head = node;
	}

	insertFirst(data) {
		if(!this.head) {
			this.head = new Node(data);
		} else {
			this.head = new Node(data, this.head);
		}
	}

	size() {
		var counter = 0;
		var tracker = this.head;

		while (tracker) {
			tracker = tracker.next;
			counter++;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		var tracker = this.head;

		if(!tracker) {
			return;
		}

		while (tracker.next) {
			tracker = tracker.next;
		}

		return tracker;
	}

	clear() {
		this.head = null;
	}

	removeFirst() {
		if (!this.head) {
			return;
		}

		if (this.next !== null) {
			this.head = this.head.next;
		} else {
			this.clear();
		}
	}

	removeLast() {
		if(!this.head) {
			return; //Empty list, just return
		}

		var currentNode = this.head; //Get reference to first node

		if (this.head.next === null) {
			this.clear(); //Only one node, clear it and return;
			return;
		}

		var nextNode = this.head.next; //Get a reference to the second node

		while (nextNode) {
			if (nextNode.next === null) { //If the next nodes next is null it means it is the last item
				currentNode.next = null;  //Set the current nodes next to null and return to chop the last item off
				return;
			}

			currentNode = nextNode;
			nextNode = currentNode.next; //Otherwise move on to the next two nodes to check
		}
	}

	insertLast(data) {
		var lastNode = this.getLast();
		if(lastNode) {
			lastNode.next = new Node(data);
		} else {
			this.head = new Node(data);
		}
		
	}

	getAt(index) {
		if(index > this.size()) {
			return null;
		}

		var tracker = this.head;
		var counter = 0;

		while (tracker) {
			if (counter === index) {
				return tracker;
			}

			tracker = tracker.next;
			counter++;
		}
	}

	removeAt(index) {
		if (this.size() < index || !this.head) {
			return;
		}

		if (index <= 0) {
			this.removeFirst();
			return;
		}

		if (index === this.size() - 1) {
			var lastNode = this.getAt(this.size() - 2);
			lastNode.next = null;
			return;
		}

		var previous = this.getAt(index - 1);
		var next = this.getAt(index + 1);
		previous.next = next;
	}


	insertAt(data, index) {
		if (this.size() < index) {
			this.insertLast(data);
			return;
		}

		if (index === 0 || this.head === null) {
			this.insertFirst(data);
			return;
		}

		var previous = this.getAt(index - 1);
		var next = this.getAt(index);
		var newNode = new Node(data, next);

		previous.next = newNode;
	}

	forEach(fn) {
		var tracker = this.head;

		while (tracker) {
			fn(tracker);
			tracker = tracker.next;
		}
	}
}

module.exports = { Node, LinkedList };
