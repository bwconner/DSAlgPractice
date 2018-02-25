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
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		var oldHead = this.head;
		this.head = new Node(data, oldHead); //Puts the new node at the start of the list and makes its next the old head of the list
	}

	size() {
		var currentNode = this.head; //Get reference to first node
		var counter = 0;

		while (currentNode) {
			currentNode = currentNode.next; //Crawl through each node and count them up
			counter++;
		}

		return counter;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		if (!this.head) {
			return null;
		}

		var currentNode = this.head; //Get reference to first node

		while (currentNode.next) {
			currentNode = currentNode.next; //While there is a next node available move on to it
		}

		return currentNode;
	}

	removeFirst() {
		this.head = this.head.next; //Sets the head to the current heads next element		
	}

	removeLast() {
		if(this.head === null) {
			return; //Empty list, just return
		}

		var currentNode = this.head; //Get reference to first node

		if (currentNode.next === null) {
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

	clear() {
		this.head = null;
	}

	insertLast(data) {
		//var currentNode = this.head;

		//while (currentNode.next) {
		//	currentNode = currentNode.next; //Iterate through to get a reference to the last node
		//}

		//currentNode.next = new Node(data); //Add a new node to the end of the list

		var lastNode = this.getLast(); //Reuse getLast to find the last node
		if (lastNode) {
			lastNode.next = new Node(data); //Add a new node to the end of the list
		} else {
			this.head = new Node(data); //Empty List, make this the head
		}
	}

	getAt(index) {
		var currentNode = this.head; //Get reference to first node
		var counter = 0;

		while (currentNode) {
			if (counter === index) {
				return currentNode;
			}
			currentNode = currentNode.next; //Crawl through each node and count them up
			counter++;
		}

		return null; //If while loop ended and index was outside of bounds return null
	}

	removeAt(index) {
		if(!this.size() || index > this.size()) {
			return; //If this has no node or the index is outside of the list just return immediately
		}

		if (index <= 0) {
			this.removeFirst();
			return;
		}

		var nodeBefore = this.getAt(index-1); //Find the node before the one to remove
		var nodeAfter = this.getAt(index+1);	//Find the node after the one to remove

		nodeBefore.next = nodeAfter; //Set the node before's next to be the one after
	}

	insertAt(data, index) {
		if (!this.size() || index <= 0) {
			this.insertFirst(data); //If there are no current nodes, just add this to the start
			return;
		}

		if (index > this.size()) {
			this.insertLast(data); //If the index is outside of the bounds of the list, add it as the last node
			return;
		}

		var nodeBefore = this.getAt(index-1); //Find the node before the desired spot to add
		var nodeAfter = this.getAt(index);	//Find the node currently living at the desired index
		var newNode = new Node(data);	//Create a new node with data

		nodeBefore.next = newNode; //Set node before it to point at the new node
		newNode.next = nodeAfter; //Set the new node to point at the node after so it relinks the list
	}

	forEach(fn) {
		var currentNode = this.head; //Get reference to first node

		while (currentNode) {
			fn(currentNode);
			currentNode = currentNode.next;
		}
	}

	*[Symbol.iterator]() {
		let node = this.head;
		while (node) {
			yield node;
			node = node.next;
		}
	}
}

module.exports = { Node, LinkedList };
