// Node depth = distance between a node in a BST and the tree's root.
// Write a function that takes a BST and returns the sum of its nodes' depths.

class BST {
    constructor (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function nodeDepths(root) {
   return checkNodeDepth (root, sum = 0)
}

function checkNodeDepth (node, runningSum) {
    newRunningSum = 0
    if (!node) return 0;
    if (node.left) {
        newRunningSum += runningSum
    }
    if (node.right) {
        newRunningSum += runningSum
    }
    else {
        checkNodeDepth(node.left, newRunningSum)
        checkNodeDepth(node.right, newRunningSum)
    }
}

function nodeDepths(root, depth = 0) {
    if (root === null) return 0;
    return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}

function nodeDepths(root) {
    let sumOfDepths = 0;
    const stack = [{node: root, depth: 0}];
    while (stack.length > 0) {
        const {node, depth} = stack.pop();
        if(node === null) continue;
        sumOfDepths += depth;
        stack.push({node: node.left, depth: depth +1});
        stack.push({node: node.right, depth: depth + 1})
    }
    return sumOfDepths;
}
