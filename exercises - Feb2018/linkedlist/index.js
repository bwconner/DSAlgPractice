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
}

module.exports = { Node, LinkedList };
