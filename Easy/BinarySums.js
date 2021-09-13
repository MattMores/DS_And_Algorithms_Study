//Write a funciton that take a Binary Tree and returns a list of its
//branch sums ordered from leftmost branch sum to rightmost.

class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
      traverseTree(root, 0, sums = [])
      return sums;
  }

  function traverseTree (node, runningSum, sums){
      if (!node) return;
      const newRunningSum = runningSum + node.value;

      if (!node.left && !node.right) {
          sums.push(newRunningSum);
          return
      }

      traverseTree(node.left, newRunningSum, sums);
      traverseTree(node.right, newRunningSum, sums);
  }
