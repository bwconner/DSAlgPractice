// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {

	//Going down left side of tree
	if(max !== null && node.data > max) {
		return false;
	}

	//Going down right side of tree
	if(min !== null && node.data < min) {
		return false;
	}

	//Go to next left node and check if it returns false
	if(node.left && !validate(node.left, min, node.data)) {
		return false;
	}

	//Go to next right node and check if it returns false
	if(node.right && !validate(node.right, node.data, max)) {
		return false;
	}


	//Made it through whole tree, return true
	return true;

}

module.exports = validate;
