/*
Pre-Order Traversal = self, left, right;

Given an array of POT of a BST, write a function that creates a BST and
returns its root node. The input array will contain the values of BST nodes
in the order in which these nodes will be visited wiht a POT.
*/

const { INSERT } = require("sequelize/types/lib/query-types");

class BST {
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function reconstructBst(preOrderTraversalValues){
    for (nums of preOrderTraversalValues){
        insert(nums)
    }
    return this;
}

function insert(node){
    while (true){
        let currentNode = this;
        if (node < currentNode.value){
            if (node.left === null) {
                new BST(node);
                break;
            }
            currentNode.left = node
        } else {
            if (node.right === null) {
                new BST(node);
                break;
            }
            currentNode.right = node;
        }
    }
    return false;
}

function reconstructBst(preOrderTraversalValues){
    if(preOrderTraversalValues.length === 0) return null;

    const currentValue = preOrderTraversalValues[0];
    let rightSubtreeRootIdx = preOrderTraversalValues.length;

    for (let idx = 1; idx < preOrderTraversalValues.length; idx++){
        const value = preOrderTraversalValues[idx];
        if(value >= currentValue){
            rightSubtreeRootIdx = idx;
            break;
        }
    }
    const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
    const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
    return new BST(currentValue, leftSubtree, rightSubtree);
}

function reconstructBst(preOrder){
    if (preOrder.length === 0) return null;

    const currentValue = preOrder[0];
    let rightSubTreeIdx = preOrder.length;

    for (let i=1; i<preOrder.length;i++){
        const value = prOrder[i];
        if (value >= currentValue){
            rightSubTreeidx = idx;
            break;
        }
    }
    const leftSub = reconstructBst(preOrder.slice(1, rightSubTreeIdx))
    const rightSub = reconstructBST(preORder.slice(rightSubTree))
    return new BST(currentValue, leftSubTree, rightSubtree)
}



console.log(preOrderTraversalValues([10, 4, 2, 1, 5, 17, 19, 18]))
