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
 var isSymmetric = function(root) {
    if (root == null) return true;

    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty
    if (left.val !== right.val) return false; // If the values dont match up

	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}

// Input: root = [1,2,2,3,4,4,3]
// Output: true

// DFS
/*
A tree if symmetric if
(1) roots of its left subtree and right subtree are the same
(2) left subtree's right subtree and right subtree's left subtree (inner subtrees) are symmetric
(3) left subtree's left subtree and right subtree's right subtree (outer subtrees) are symmetric
*/

//DFS
var isSymmetric = function (root) {
    if (!root) {
      return null;
    }
    return isSymmetricHelper(root.left, root.right);
    // T.C: O(N)
    // S.C: O(H)
  };

  const isSymmetricHelper = (root1, root2) => {
    // if both roots are null, symmetric
    if (!root1 && !root2) {
      return true;
    }
    // if only one of the roots is null, asymmetric
    if (!root1 || !root2) {
      return false;
    }
    return (
      root1.val === root2.val &&
      isSymmetricHelper(root1.right, root2.left) &&
      isSymmetricHelper(root1.left, root2.right)
    );
  };

// BFS
  var isSymmetric = function(root) {
    let queue = [root, root];
    while (queue.length > 0) {
        let node1 = queue.shift(), node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.push(node1.left, node2.right);
        queue.push(node1.right, node2.left);
    }

    return true;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level could have at most n/2 nodes
}

console.log([1,2,2,3,4,4,3]) // true
console.log([1,2,2,null,3,null,3]) // false
