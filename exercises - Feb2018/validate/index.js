// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

	//This is for traversing leftwards down the tree
	//If max has been set and the current node is greater than the max
	//This is an invalid tree and should return false immediately
	if (max !== null && node.data > max) {
		return false;
	}

	//This is for traversing right down the tree
	//If min has been set and the current node is less than the min
	//This is an invalid tree and should return false immediately
	if (min !== null && node.data < min) {
		return false;
	}

	//If a node left exists, call this function again passing this node's data as the max
	if (node.left && !validate(node.left, min, node.data)) {
		return false;
	}

	//If a node right exists, call this function again passing this node's data as the min
	if (node.right && !validate(node.right, node.data, max)) {
		return false;
	}

	return true; // If no further nodes exist, this tree is valid
}

module.exports = validate;
