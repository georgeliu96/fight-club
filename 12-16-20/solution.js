// preorder: self, left, right
// inorder: left, self, right
// postorder: left, right, self

//         a
//     /     \
//    b       c
//   / \     / \
//  d   e   f   g

// pre: abdecfg
// in: dbeafcg

const preOrder = (root) => {
    if (root === null)
      return;
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  
  const inOrder = (root) => {
    if (root === null)
      return;
  
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  };
  
  function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
  
  const a = new TreeNode('a');
  const b = new TreeNode('b');
  const c = new TreeNode('c');
  const d = new TreeNode('d');
  const e = new TreeNode('e');
  const f = new TreeNode('f');
  const g = new TreeNode('g');
  //         a
  //     /     \
  //    b       c
  //   / \     / \
  //  d   e   f   g
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.left = f;
  c.right = g;
  
  preOrder(a);
  console.log('--')
  inOrder(a);
  
  
  
  
  //          a
  //           \
  //            b
  //            \
  //            c
  //   
  //
  //    b
  //  / \
  // a  c
  
  // in: a,b,c
  
  
  
  // preorder = [3,9,20,15,7]
  // inorder = [9,3,15,20,7]
  //    3
  //   / \
  //  9  20
  //    /  \
  //   15   7
  
  // preorder: self, left, right
  // inorder: left, self, right
  
  // 1)
  // preorder = [3,9,20,15,7]
  // inorder = [9,3,15,20,7]
  //             3
  //       /           \
  //    p:[9]        p: [20,15,7]
  //    i:[9]        i: [15,20,7]
  
  
  // 2)
  //               3
  //       /               \
  //    p:[9]              20
  //    i:[9]         /         \
  //               p:[15]      p:[7]          
  //              i:[15]     i: [7]
  
  
  // 3)
  //                   3
  //          /                 \
  //         9                    20
  //                          /         \
  //                         15           7        
          
  
  
  // const buildTree = function(preorder, inorder) {
  //   if (preorder.length === 0)
  //     return null;
  //   const rootVal = preorder[0];
  //   const root = new TreeNode(rootVal);
  //   const i = inorder.indexOf(rootVal);
  //   const leftInorder = inorder.slice(0, i);
  //   const rightInorder = inorder.slice(i + 1);
  //   const leftSet = new Set(leftInorder);
  //   const rightSet = new Set(rightInorder);
  //   const leftPreorder = preorder.filter((val) => leftSet.has(val));
  //   const rightPreorder = preorder.filter((val) => rightSet.has(val));
  //   root.left = buildTree(leftPreorder, leftInorder);
  //   root.right = buildTree(rightPreorder, rightInorder);
  //   return root;
  // };
  
  // preorder = [3,9,20,15,7]
  // inorder = [9,3,15,20,7]
  
  // Rpreorder = [20,15,7];
  // Rinorder = [15,20,7]
  
  // const buildTree = function(preorder, inorder) {
  //   if (preorder.length === 0)
  //     return null;
  //   const rootVal = preorder[0];
  //   const root = new TreeNode(rootVal);
  //   const i = inorder.indexOf(rootVal);
  //   const leftInorder = inorder.slice(0, i);
  //   const rightInorder = inorder.slice(i + 1);
  //   const leftPreorder = preorder.filter((val) => leftInorder.includes(val));
  //   const rightPreorder = preorder.filter((val) => rightInorder.includes(val));
  //   root.left = buildTree(leftPreorder, leftInorder);
  //   root.right = buildTree(rightPreorder, rightInorder);
  //   return root;
  // };
  
  const buildTree = function(preorder, inorder, preStart=0, preEnd=preorder.length, inStart=0, inEnd=inorder.length) {
    if (inStart === inEnd)
      return null;
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);
    const i = inorder.indexOf(rootVal);
  
    const qtyLeft = i - inStart;
    const qtyRight = inEnd - (i + 1);
  
    root.left = buildTree(preorder, inorder, preStart + 1, preStart + qtyLeft , inStart, i);
    root.right = buildTree(preorder, inorder, preStart + qtyLeft, preStart + qtyLeft + qtyRight, i + 1, inEnd);
    return root;
  };
  
  //      start -------- i -------- end
  
  preorder = [3,9,20,15,7]
  inorder = [9,3,15,20,7]
  
  // lpr: [9]
  // lin: [9]
  // rpr: [20,15,7]
  // rin: [15,20,7]
  
  const root = buildTree(preorder, inorder);
  preOrder(root);