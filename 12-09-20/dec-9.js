// https://awwapp.com/b/uccumyqhqkief/


// Graph
//  - nodes, edges

// Binary Tree
//  - directed graph 
//  - has a root, there is 1 unique path from root
//    to any node
//  - a maximum of 2 children

class Node {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  // const a = new Node(10);
  // const b = new Node(2);
  // const c = new Node(3);
  // const d = new Node(1);
  // const e = new Node(11);
  // const f = new Node(4);
  
  // const a = new Node('a');
  // const b = new Node('b');
  // const c = new Node('c');
  // const d = new Node('d');
  // const e = new Node('e');
  // const f = new Node('f');
  
  // //      a
  // //    / \ 
  // //   b   c
  // //  / \   \
  // // d  e   f
  
  
  // a.left = b;
  // a.right = c;
  // b.left = d;
  // b.right = e;
  // c.right = f;
  
  // Print out all values of this binary tree
  
  // breadthFirst: a, b, c, d, e, f
  // depthFirst: a, b, d, e, c, f
  
  const breadthFirstPrint = (root) => {
    const queue = [root];
    while (queue.length > 0) {
      const curr = queue.shift();
      console.log(curr.val);
  
      if (curr.left !== null)
        queue.push(curr.left);
  
      if (curr.right !== null)
        queue.push(curr.right);
    }
  };
  
  
  const treeSum = (root) => {
    if (root === null)
      return 0;
  
    const queue = [root];
    let sum = 0;
    while (queue.length > 0) {
      const curr = queue.shift();
      sum += curr.val;
  
      if (curr.left !== null)
        queue.push(curr.left);
  
      if (curr.right !== null)
        queue.push(curr.right);
    }
    return sum;
  };
  // breadthFirstPrint(a);
  
  // console.log(treeSum(a)); // 31
  
  // console.log(treeSum(null));
  
  const depthFirstPrint = (root) => {
    const queue = [root];
    while (queue.length > 0) {
      const curr = queue.pop();
      console.log(curr.val);
  
      if (curr.right !== null)
        queue.push(curr.right);
  
      if (curr.left !== null)
        queue.push(curr.left);
    }
  };
  
  // depthFirstPrint(a);
  //      a
  //    / \ 
  //   b   c
  //  / \   \
  // d  e   f
  // depthFirst: a, b, d, e, c, f
  
  
  
  const a = new Node('a');
  const b = new Node('b');
  const c = new Node('c');
  const d = new Node('d');
  const e = new Node('e');
  const f = new Node('f');
  
  //      a
  //    / \ 
  //   b   c
  //  / \   \
  // d  e   f
  
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  // const depthFirstRecur = (root) => {
  //   if (root === null)
  //     return;
  //   depthFirstRecur(root.left);
  //   depthFirstRecur(root.right);
  // };
  
  // depthFirstRecur(a)
  
  //      a
  //    / \ 
  //   b   c
  //  / \   \
  // d  e   f
  
  
  // const depthFirstArray = (root, array=[]) => {
  //   if (root === null)
  //     return array;
  //   array.push(root.val);
  //   depthFirstArray(root.left, array);
  //   depthFirstArray(root.right, array);
  //   return array;
  // };
  
  // const depthFirstArray = (root) => {
  //   if (root === null)
  //     return []
  
  //   const leftSubTreeVals = depthFirstArray(root.left);
  //   const rightSubtreeVals = depthFirstArray(root.right);
  //   return [
  //     root.val,
  //     ...leftSubTreeVals,
  //     ...rightSubtreeVals
  //   ];
  // };
  
  // const depthFirstArray = (root) => {
  //   if (root === null)
  //     return []
  
  //   return [
  //     root.val,
  //     ...depthFirstArray(root.left),
  //     ...depthFirstArray(root.right)
  //   ];
  // };
  
  // console.log(depthFirstArray(a)); // ['a', 'b', 'd', 'e', 'c', 'f']
  
  //      a
  //    / \ 
  //   b   c
  //  / \   \
  // d  e   f
  
  // Write fn that returns a 2D array where subarray
  // represents a path from the root to a leaf
  
  const allPaths = (root) => {
    if (root === null)
      return [];
  
    if (root.left === null && root.right === null)
      return [[root.val]];
    
    const result = [
      ...allPaths(root.left),
      ...allPaths(root.right),
    ];
  
    return result.map(subarray => [root.val, ...subarray]);
  };
  
  console.log(allPaths(a));
  // [
  //   ['a', 'b', 'd'],
  //   ['a', 'b', 'e'],
  //   ['a', 'c', 'f'],
  // ]
  
  
  // x
  // \
  //  y
  
  const x = new Node('x');
  const y = new Node('y');
  x.right = y;
  console.log(allPaths(x));
  // [
  //   ['x', 'y']
  // ]
  