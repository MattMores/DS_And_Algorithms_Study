function findClosestValueInBST(tree, target){
    return findClosestValue(tree, target, tree.value)
}

function findClosestValue(tree, target, closest){
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
    }
    if (target < tree.value){
        return findClosestValue(tree.left, target, closest);
    } else if (target > tree.value){
        return findClosestValue(tree.right, target, closest)
    } else {
        return closest;
    }
}

function findClosestValueInBST(tree, target){
    findClosestHelper (tree, target, Infinity)
}

function findClosestHelper (tree, target, closest){
    if (tree = null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) {
        return findClosestHelper(tree.left, target, closest)
    }
}

class BST {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}


class BinaryTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root){
    let sums = [];
    calculateBranchSums(root, 0, sums);
    return sums;
}

function calculateBranchSums(node, runningSum, sums){
    if (!node) return;

    const newRunningSum = runningSum + node.value;
    if (!node.left && !node.right){
        sums.push(newRunningSum);
        return;
    }

    calculateBranchSums(node.left, newRunningSum, sums);
    calculateBranchSums(node.right, newRunningSum, sums);
}
