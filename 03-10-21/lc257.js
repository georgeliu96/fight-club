// https://leetcode.com/problems/binary-tree-paths/

class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const node_3 = new TreeNode(3);
  const node_9 = new TreeNode(9);
  const node_20 = new TreeNode(20);
  const node_15 = new TreeNode(15);
  const node_7 = new TreeNode(7);
  node_3.left = node_9;
  node_3.right = node_20;
  node_20.left = node_15;
  node_20.right = node_7;

//   3
//  / \
// 9  20
//   /  \
//  15   7

// time: O(n * n^2) -> (O(n^3))
const binaryTreePaths = (root) => {
    if (root === null) {
      return [];
    }
  
    if (root.left === null && root.right === null) {
      return [ root.val ];
    }
  
    const partialPaths = [
      ...binaryTreePaths(root.left),
      ...binaryTreePaths(root.right)
    ];
    return partialPaths.map(partial => root.val + '->' + partial);
  };
  
  console.log(binaryTreePaths(node_3));
  // [
  //   3->9,
  //   3->20->15,  
  //   3->20->7
  //  ]