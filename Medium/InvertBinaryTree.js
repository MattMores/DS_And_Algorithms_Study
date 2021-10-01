/* Take in a BST and invert it. In other words, swap every left node in the
tree for is corresponding right node */
class BST {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(tree){
    let array = []
    preOrderTraversal(tree, array)
    for (nums of array){
    bstConstruction(nums)
    }
}

function preOrderTraversal(tree, array){
    if (tree === null) return
    preOrderTraversal(tree.left, array)
    array.push(tree.value)
    preOrderTraversal(tree.right, array)
}

function bstConstruction(nums){
    let currentNode = this;
    while(true){
        if (nums > currentNode.value) {
            if (currentNode.left === null){
                currentNode.left = new BST (nums);
                break;
            }
            else {
                currentNode = currentNode.left
            }
        }
    }

}

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function invertBinaryTree(tree){
    const queue = [tree];//first in, first out
    while(queue.length) {
        const current = queue.shift();
        if (current === null) continue;
        swapLeftAndRight(current);
        queue.push(current.left);
        queue.push(current.right);
    }
}

function swapLeftAndRight(tree){
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}

function invertBinaryTree(tree){
    if (tree === null) return;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right)
}

function swapLeftAndRight(tree){
    let right = tree.right;
    tree.right = tree.left;
    tree.left = right
}

function invertBinaryTree(tree){
    let queue = [tree];
    let current = queue.shift();
    while (queue.length){
        if (current === null) continue;
        swap(current)
        queue.push(current.left)
        queue.push(current.right)
    }
}

function swap(tree){
    let left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}
