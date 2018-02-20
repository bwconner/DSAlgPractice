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
	constructor(data) {
		this.data = data;
		this.children = [];
	}

	add(data) {
		this.children.push(new Node(data));
	}

	remove(data) {
		this.children = this.children.filter(function(child){
			return child.data !== data;
		});
	}
}

class Tree {
	constructor() {
		this.root = null;
	}

	traverseBF(fn) {
		var treeRow = [this.root];

		//While treeRow has elements loop through the tree
		//At each level grab the children of each element and
		//add them to the end of the tree
		while (treeRow.length) {
			var node = treeRow.shift();
			treeRow.push(...node.children);
			fn(node);
		}
	}

	//While treeRow has elements loop through the tree
	//At each level grab the children of each element and
	//add them to the start of the tree
	traverseDF(fn) {
		var treeRow = [this.root];

		while (treeRow.length) {
			var node = treeRow.shift();
			treeRow.unshift(...node.children);
			fn(node);
		}
	}
}

module.exports = { Tree, Node };
