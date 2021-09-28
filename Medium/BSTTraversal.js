//Traverse a BST and put it's node values into the input array in pre,post, and in
// order traversals.

//Pre-Order = self, left, right
//In-Order = left, self, right
//Post-Order = left, right, self

function inOrderTraverse(tree, array){
    if (tree !== null){
        inOrderTraverse(tree.left, array);
        array.push(tree.value);
        inOrderTraverse(tree.right, array);
    }
    return array;
}

function preOrderTraverse(tree, array) {
    if (tree !== null){
        array.push(tree.value);
        preOrderTraverse(tree.left, array);
        preOrderTraverse(tree.right, array);
    }
    return array;
}

function postOrderTraverse(tree, array){
    if (tree !== null){
        postOrderTraverse(tree.left, array);
        postOrderTraverse(tree.right, array);
        array.push(tree.value)
    }

}
