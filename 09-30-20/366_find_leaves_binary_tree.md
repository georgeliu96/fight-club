# 366. Find Leaves of Binary Tree

##### <a href="https://leetcode.com/problems/find-leaves-of-binary-tree/" target="_blank">Find Leaves of Binary Tree</a>

```
Given a binary tree, collect a tree's nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.

Example 1:
Input: [1,2,3,4,5]
  
          1
         / \
        2   3
       / \     
      4   5    

Output: [[4,5,3],[2],[1]]


Example 2:
Input: [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8]

       37
       / \
      /   \
     /     \
  -34      -48
    \      / \
  -100  -100 -48
              /
            -54
             / \
           -71 -22
                 \
                  8

Output: [[-100,-100,-71,8],[-34,-22],[-54],[48],[-48],[37]]
```

<br><br>

```js
// Get total height of tree
// Calculate relative height of each node
// Place node in list by height
// Leaves should have height = 0
// Nodes 1 away from leaf will have height = 1

// h = height of tree
// O(h) time, O(h) space
function getHeight(root) {
  if (!root) return -1;

  const left = getHeight(root.left);
  const right = getHeight(root.right);

  return Math.max(left, right) + 1;
}


// h = height of tree
// n = total number of nodes
// O(n*h) time and O(n) space
function findLeaves(root) {
  if (!root) return [];

  const height = getHeight(root);             // O(h) time
  const stack = [ root ];        
  const list = Array.from({length: height + 1}, () => []);

  while (stack.length) {                      // O(n) time
    const current = stack.pop();    
    const relHeight = getHeight(current);     // O(h) time
    list[relHeight].push(current.val);        // calc relative height for each node

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return list;
}
```