/* Write a function that takes in a BST who's nodes have an addtiona pointer to their
parent node as well as a node contained in that tree and returns the given node's
successor (i.e. the next node to be visited) using in-order tree-traversal.

If it's the last node to be visited, then it has no successor. */

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node){
    if(tree.value === null) return;
    let array = [];
    findSuccessor(tree.left, node.value);
    array.push(node.value)
    findSuccessor(tree.right, node.value)
    for (let i = 0; i<array.length; i++){
        let nums = array[i];
        if (node === nums) return array[i + 1]
    }
}

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function findSuccessor(tree, node){
    const inOrderTraversalOrder = getInOrderTraversalOrder(tree);

    for (let i = 0; i < inOrderTraversalOrder.length; i++){
        const currentNode = inOrderTraversalOrder[i];
        if(currentNode !== node) continue;
        if (i === inOrderTraversalOrder.length -1) return null;
        return inOrderTraversalOrder[i + 1]
    }
}

function getInOrderTraversalOrder(node, order = []){
    if (node === null) return order;
    getInOrderTraversalOrder(node.left, order);
    order.push(node);
    getInOrderTraversalOrder(node.right, order);

    return order;
}

//in order = left, self, right
