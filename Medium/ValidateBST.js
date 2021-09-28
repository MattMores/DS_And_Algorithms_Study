/* write a funciton that takes in a potentially invalid
BST and returns a boolean representing whether the BST is
valid */

class BST {
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

function validateBST(tree){
    return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(tree, minValue, maxValue){
    if (tree === null) return true;
    if (tree.value < minValue || tree.value >= maxValue) return false;
    const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
}
