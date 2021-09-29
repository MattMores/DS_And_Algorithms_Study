/* Write a function that takes in a BST and a positive integer (k) and returns the
kth largest integers contained in the BST.

K will be less than or equal to the number of nodes in the tree.

 15 - 5 - 20 - 2 - 5- 17 -22 - 1 -3
 k = 3

 answer = 17

 */

 class BST {
     constructor(value){
         this.value = value;
         this.left = null;
         this.right = null;
     }
 }

 function findKthLargestValueInBst(tree, k){
    let findKthHelper = function (tree, []);
    return array.length - k
 }

 function findKthHelper(tree, array){
    if (tree !== null) {
        array.push(tree.value);
        findKthHelper(tree.left, array)
        findKthHelper(tree.right, array)
    }
    return array.sort ((a, b) => a - b);
 }

 function findKthLargestValueInBst(tree, k){
     const sortedNodeValues = [];
     inOrderTraverse(tree, sortedNodeValues);
     return sortedNodeValues[sortedNodeValues.length - k];
 }

 function inOrderTravers(node, sortedNodeValues){
     if (node === null) return;

     inOrderTraverse(node.left, sortedNodeValues);
     sortedNodeValues.push(node.value);
     inOrderTraverse(node.right, sortedNodeValues);
 }

 class BST {
     constructor(value){
         this.value = value;
         this.left = null;
         this.right = null;
     }
 }

 class TreeInfo {
     constructor(numberOfNodesVisited, latestVisitedNodeValue){
         this.numberOfNodesVisited = numberOfNodesVisited;
         this.latestVisitedNodeValue = latestVisitedNodeValue;
     }
 }

 function findKthLargestValueInBst(tree, k){
     const treeInfo = new TreeInfo(0, -1);
     reverseInOrderTravers(tree, k, treeInfo);
     return treeInfo.latestVisitedNodeValue;
 }

 function reverseInOrderTraverse(node, k, treeInfo){
     if (node === null || treeInfo.numberOfNodesVisited >= k) return;

     reverseInOrderTraverse(node.right, k, treeInfo);
     if(treeInfo.numberOfNodesVisites < k){
         treeInfo.numberOfNodesVisited++;
         treeInfo.latestVisitedNodeValue = node.value;
         reverseInOrderTraverse(node.left, k, treeInfo)
     }
 }
