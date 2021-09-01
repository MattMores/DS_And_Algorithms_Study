/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */

//DFS
 var isSymmetric = function(root) {
    if (root === null) return true;
    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
  if (left === null && right === null) return true;
  else if (left !== null && right !== null) return (left.val === right.val) && (symmetryChecker(left.left, right.right)) && (symmetryChecker(left.right, right.left))
  return false
}


console.log([1,2,2,3,4,4,3]) // true
console.log([1,2,2,null,3,null,3]) // false
