// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
	var slow = list.head;
	var fast = list.head;
	var i = 0;

	while (i < n) {
		fast = fast.next; //Move the fast iterator N times ahead
		i++;
	}

	while(fast.next) { //While fast isn't the last node in the list, keep advancing each iterator by one node
		fast = fast.next;
		slow = slow.next;
	}

	return slow; //Return slow as it is N places from the end of the list
}

module.exports = fromLast;
