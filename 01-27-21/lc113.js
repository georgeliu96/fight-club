// https://leetcode.com/problems/path-sum-ii/

const pathSum = function(root, targetSum) {
    if (root === null)
      return [];
    
    if (root.left === null && root.right === null && root.val === targetSum)
      return [ [root.val] ];
    
    const leftPaths = pathSum(root.left, targetSum - root.val);
    const rightPaths = pathSum(root.right, targetSum - root.val);
    const childrenPaths = [ ...leftPaths, ...rightPaths ];
    return childrenPaths.map((path) => [ root.val, ...path ]);
  };
  
  
  // const pathSum = (root, targetSum) => {
  //   const result = _pathSum(root, targetSum);
  //   return result.map(path => path.reverse());
  // };
  
  // const _pathSum = function(root, targetSum) {
  //   if (root === null)
  //     return [];
    
  //   if (root.left === null && root.right === null && root.val === targetSum)
  //     return [ [root.val] ];
    
  //   const leftPaths = _pathSum(root.left, targetSum - root.val);
  //   const rightPaths = _pathSum(root.right, targetSum - root.val);
  //   const childrenPaths = [ ...leftPaths, ...rightPaths ];
  
  //   const finalPaths = []
  
  //   for (let path of childrenPaths) {
  //     path.push(root.val);
  //     finalPaths.push(path);
  //   }
  
  //   return finalPaths;
  // };
  
  
  // pathSum(null, 42); // []
  
  
  // node = Node(42); // assume node is a leaf
  // pathSum(node, 42); // [ [42] ]
  
  // pathSum(null, 0); // [ [] ] **
  
  
  // const foo = (x) => {
  //   if (x === 0)
  //     return;
  
  //   foo(x - 1);
  //   foo(x - 1);
  // };
  
  
  const pathSum = function(root, targetSum, d=0) {
    if (root === null)
      return [];
    
    if (root.left === null && root.right === null && root.val === targetSum) {
      const path = new Array();
      path[d] = root.val;
      return [ path ];
    }
    
    const leftPaths = pathSum(root.left, targetSum - root.val, d + 1);
    const rightPaths = pathSum(root.right, targetSum - root.val, d + 1);
    const childrenPaths = [ ...leftPaths, ...rightPaths ];
    
    for (let path of childrenPaths) {
      path[d] = root.val;
    }
  
    return childrenPaths
  };
  