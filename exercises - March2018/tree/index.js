// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
	constructor(data, ...children) {
		this.data = data;
		this.children = [...children];
	}

	add(data, ...children) {
		this.children.push(new Node(data, ...children));
	}

	remove() {
		this.children = [];
	}

}

class Tree {
	constructor(node = null) {
		this.root = node;
	}

	traverseBF(fn) {
		var tree = [this.root];
		var currentNode;

		while (tree.length) {
			currentNode = tree.shift();
			tree.push(...currentNode.children);
			fn(currentNode);
		}
	}

	traverseDF(fn) {
		var tree = [this.root];
		var currentNode;

		while(tree.length) {
			currentNode = tree.shift();
			tree.unshift(...currentNode.children);
			fn(currentNode);
		}
	}
}

module.exports = { Tree, Node };
