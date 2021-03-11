// https://leetcode.com/problems/binary-tree-right-side-view/

// anne/chao (level order traversal) -> do bfs? from right to left, track levels
// george -> recurse, take entire right, only add left if its longer

// const rightSideView = (root) => {
//   if (root === null) {
//     return ?;
//   }

//   rightSideView(root.left);
//   rightSideView(root.right);
// };

//      a
//    /   \
//   b     c

const rightSideView = (root) => {
  if (root === null) return [];
  const queue = [ { node: root, level: 0 } ];
  const result = [];
  while (queue.length > 0) {
    const { node, level } = queue.shift();
    if (level === result.length) {
      result.push(node.val);
    }

    if (node.right !== null) {
      queue.push({ node: node.right, level: level + 1 });
    }

    if (node.left !== null) {
      queue.push({ node: node.left, level: level + 1 });
    }

  }
  return result;
};

//   3
//  / \
// 9  20
//   /  \
//  15   7

// console.log(rightSideView(node_3));

const rightSideView = (root) => {
    if (root === null) return [];
  
    const answer = [root.val];
    const left = rightSideView(root.left);
    const right = rightSideView(root.right);
    for (let i = 0; i < Math.max(left.length, right.length); i += 1) {
      answer.push(right[i] || left[i]);
    }
    return answer;
  };
  
  // george
  // O (n^2)
  const rightSideView = (root) => {
    if (root === null) return [];
  
    const right = rightSideView(root.right);
    const left = rightSideView(root.left).slice(right.length);
  
    return [root.val, ...right, ...left];
  };
  
  console.log(rightSideView(node_3));

  // tayyab
  const rightSideView = (root, level = 0, levelsVisited = new Set()) => {
    if (root == null) {
      return [];
    }
    const seen = [
      ...rightSideView(root.right, level + 1, levelsVisited),
      ...rightSideView(root.left, level + 1, levelsVisited),
    ];
    if (!levelsVisited.has(level)) {
      seen.unshift(root.val);
    }
    levelsVisited.add(level);
    return seen;
  };
  
  // alvin 
  // O(n) !!!
  
  const rightSideView = (root) => {
      const values = [  ];
    
    const traverseRight = (node, depth) => {
        if (node === null)
          return;
      
      if (values.length <= depth)
        values.push(node.val);
      
      traverseRight(node.right, depth + 1);
      traverseRight(node.left, depth + 1);
    };
  
    traverseRight(root, 0);
    return values
  };

  
  // can do bfs~like solution with DFS and using a stack
  // push and pop are constant time so can make an O(n) solution that way as well

  const rightSideView = (root) => {

    if (root === null) return [];
    const stack = [ { node: root, level: 0 } ];
    const result = [];
    while (stack.length > 0) {
        const { node, level } = stack.pop();

        if (level === result.length) result.push(node.val);
        
        if (node.left !== null) {
            stack.push({ node: node.left, level: level + 1 });
        }

        if (node.right !== null) {
            stack.push({ node: node.right, level: level + 1 });
        }
        
    }

    return result;
};
