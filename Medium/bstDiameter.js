class BinaryTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree){
    let edgeCounter = 0;
    let longestCount = 0;
    while(tree !== null){
        currentNode = this;
        if(tree.left || tree.right){
            edgeCounter++
            currentNode = tree.left
        }
    }
}

class BinaryTree {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function binaryTreeDiameter(tree){
    return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree){
    if (tree === null) {
        return new TreeInfo(0, 0);
    }

    const leftTreeInfo = getTreeInfo(tree.left); // 3 Now we have diameter and height
    const rightTreeInfo = getTreeInfo(tree.right); // 1

    const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
    const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
    const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
    const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

    return new TreeInfo(currentDiameter, currentHeight);
}

class TreeInfo{
    constructor(diameter, height){
        this.diameter = diameter;
        this.height = height;
    }
}
