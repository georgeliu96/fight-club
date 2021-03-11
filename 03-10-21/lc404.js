// https://leetcode.com/problems/sum-of-left-leaves/

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
// depth: 3, 9, 20, 15, 7
  
  // const depthFirstPrint = (root) => {
  //   if (root === null)
  //     return;
  //   console.log(root.val);
  //   depthFirstPrint(root.left);
  //   depthFirstPrint(root.right);
  // };
  
  // console.log(depthFirstPrint(node_3));
  
  const sumOfLeftLeaves = (root, isLeft = false) => {
    if (root === null)
      return 0;
  
    const isLeaf = root.left === null && root.right === null;
    if (isLeaf && isLeft) {
      return root.val;
    }
    
    return sumOfLeftLeaves(root.left, true) + sumOfLeftLeaves(root.right, false); 
  };
  
  console.log(sumOfLeftLeaves(node_3));