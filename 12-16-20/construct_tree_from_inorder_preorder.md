# <a href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" target="_blank">105. Construct Binary Tree from Preorder and Inorder Traversal [Medium]</a>

```
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
```

<br><br>
<img src="https://i.imgur.com/fXePO1o.png" width="800" alt="Construct Tree">
<br><br>

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

function indexMap(inorder) {
  const map = {};
  
  inorder.forEach((num, i) => {
    map[num] = i;
  });

  return map;
}


// O(n) time | O(n) space
function buildTree(preorder, inorder) {
  const map = indexMap(inorder);

  function buildTreeHelper(preorder, inorder, map, ps, pe, is, ie) {
    if (ps > pe) {
      return null;
    }

    const val = preorder[ps];
    const root = new TreeNode(val);
    const idx = map[val];
    const diff = ie - idx;

    const leftSubtree = buildTreeHelper(preorder, inorder, map, ps + 1, pe - diff, is, idx - 1);
    const rightSubtree = buildTreeHelper(preorder, inorder, map, pe - diff + 1, pe, idx + 1, ie);

    root.left = leftSubtree;
    root.right = rightSubtree;
    return root;
  }

  return buildTreeHelper(preorder, inorder, map, 0, preorder.length - 1, 0, inorder.length - 1);
}



// O(n^2) time | O(n) space
function buildTree(preorder, inorder, ps=0, pe=preorder.length-1, is=0, ie=inorder.length - 1) {
  if (ps > pe) {
    return null;
  }

  const val = preorder[ps];
  const root = new TreeNode(val);
  const idx = inorder.indexOf(val);          // no duplicates
  const diff = ie - idx;

  const leftSubtree = buildTree(preorder, inorder, ps + 1, pe - diff, is, idx - 1);
  const rightSubtree = buildTree(preorder, inorder, pe - diff + 1, pe, idx + 1, ie);

  root.left = leftSubtree;
  root.right = rightSubtree;
  return root;
}
```