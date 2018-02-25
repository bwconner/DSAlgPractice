// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }

function midpoint(list) {
	var slow = list.head;
	var fast = list.head;

	while (fast.next && fast.next.next) { //Make sure next two nodes after fast exist
		slow = slow.next;	//Iterate slow by one node
		fast = fast.next.next; //Iterate fast by two nodes
	}

	return slow; //When fast can not be iterated further any further, slow is sitting on the midpoint
}

module.exports = midpoint;
