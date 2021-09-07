/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

//Given the root of a binary tree, return the inorder traversal of its nodes' values.

// The number of nodes in the tree is in the range [0, 100].

// left, root, right
 var inorderTraversal = function(root) {
    if (root = []) return;
    if (root.left && root.right === null) return root;
    if (root.left === null) {
        root.left = root.val
        inorderTraversal(root.val);

};

function inorderTraversal(root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
        if (root) {
            stack.push(root);
            root = root.left;
        }
        else {
            root = stack.pop();
            res.push(root.val);
            root = root.right;
        }
    }
    return res
}

function inorderTraversal(root) {
    const res = [];
    traverse(root);
    return res;

    function traverse(node) {
    if (root === null) return;
    traverse(node.left);
    res.push(node.val);
    traverse(node.right);
    }
}

function preorderTraversal(root) {
    const res = [];
    traverse(root);
    return res;

    function traverse(node) {
    if (root === null) return;
    res.push(node.val);
    traverse(node.left);
    traverse(node.right);
    }
}

function postOrderTraversal(root) {
    const res = [];
    traverse(root);
    return res;

    function traverse(node) {
        if (root === null) return;
        traverse(node.left);
        traverse(node.right);
        res.push(node.val);
    }
}

const inorderTraversal = (root) => {
    if (!root) return [];
    const res = [];
    res.push(...inorderTraversal(root.left));
    res.push(root.val);
    res.push(...inorderTraversal(root.right));
    return res;
};

console.log(inorderTraversal([1,null,2,3])) //[1,3,2]
console.log(inorderTraversal([])) //[]
console.log(inorderTraversal([1])) //[1]
console.log(inorderTraversal([1,2])) //[2,1]
console.log(inorderTraversal([1, null, 2])) //[1,2]
