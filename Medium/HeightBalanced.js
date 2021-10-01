/* Given the root node of a BST, write a function that returns true if the
BST is hieght balanced and falce if it isn't.

A BST is balanced if each node of the tree's difference b/w height of its
left subtree and right subtree is at most 1. */

class BinaryTree{
    constructor(tree){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class TreeInfo{
    constructor(isBalanced, height){
        this.isBalanced = isBalanced;
        this.height = height;
    }
}

function heightBalancedBinaryTree(tree){
    const treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;

}

function getTreeInfo(node){
    if (node === null) return new TreeInfo(true, -1);
    const leftSubtreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced =
    leftSubtreeInfo.isBalanced && rightSubtreeInfo.isBalanced &&
    Math.abs(leftSubtreeInfo.height - rightSubtreeInfo.height) <= 1;
    const height = Math.max(leftSubtreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);
}
