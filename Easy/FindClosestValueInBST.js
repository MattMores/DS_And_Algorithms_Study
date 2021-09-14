//Given a BST and target, find the node that is closest to the target.
// This is the class of the input tree. Do not edit.

  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  function findClosestValueInBst(tree, target) {
      return findClosestValue(tree, target, tree.value)
  }

  function findClosestValue(tree, target, closest) {
      if (tree === null) return closest;
      if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
          closest = tree.value;
      }
      if (target < tree.value) {
          return findClosestValue(tree.left, target, closest);
      } else if (target > tree.value) {
          return findClosestValue(tree.right, target, closest)
      } else {
          return closest;
      }
  }
