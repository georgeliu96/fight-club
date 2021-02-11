// Binary Search Tree
// - binary tree
// - at every subroot, all nodes in the left subtree are < the subroot
//      - all nodes in the right subtree are >= the subroot
//
// A BST is a fully ordered/strict data structure
//   maintaining it is costly
//
//

// MaxHeap
// - binary tree
// - at every subroot, all children are less or eq than the subroot
// - every node is greater than its children
// - the root of a max heap is guaranteed to be the true maximum

class MaxHeap {
    constructor() {
      this.array = [ Infinity ];
    }
  
     // [ Inf, 10 ]
    insert(val) {
      this.array.push(val);
      this.siftUp(this.array.length - 1);
    }
  
    siftUp(targetIdx) {
      const parentIdx = Math.floor(targetIdx / 2);
      if (this.array[targetIdx] <= this.array[parentIdx])
        return;
  
      const temp = this.array[parentIdx];
      this.array[parentIdx] = this.array[targetIdx];
      this.array[targetIdx] = temp;
      this.siftUp(parentIdx);
    }
  }
  
  // recursively swapping a value up the tree
  // is known as sift-up or percolate-up
  
  // let a = 'alvin';
  // let b = 'brian';
  // console.log(a, b);
  // [ a, b ] = [ b, a ]
  // console.log(a, b);
  
  // const peeps = [ 'alvin', 'abby', 'brian' ];
  // console.log(peeps);
  // [ peeps[0], peeps[1] ] = [ peeps[1], peeps[0] ];
  // console.log(peeps);
  
  
  const heap = new MaxHeap();
  heap.insert(10);
  heap.insert(5);
  heap.insert(7);
  heap.insert(8);
  heap.insert(20);
  heap.insert(3);
  heap.insert(21);
  
  
  console.log(heap.array);
  