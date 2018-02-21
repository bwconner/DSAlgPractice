// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	var answer = [0];
	var tree = [root, 'eor'];

	while (tree.length > 1) {
		var node = tree.shift();
		if (node === 'eor') {
			answer.push(0);
			tree.push('eor');
		} else {
			tree.push(...node.children);
			answer[answer.length - 1]++;
		}
	}

	return answer;
}

module.exports = levelWidth;
