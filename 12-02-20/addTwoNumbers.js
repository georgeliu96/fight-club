class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
  // Output: 7 -> 8 -> 0 -> 7
  
  const a1 = new Node(7);
  const a2 = new Node(2);
  const a3 = new Node(4);
  const a4 = new Node(3);
  a1.next = a2;
  a2.next = a3;
  a3.next = a4;
  
  const b1 = new Node(5);
  const b2 = new Node(6);
  const b3 = new Node(4);
  
  b1.next = b2;
  b2.next = b3;
  
  
  // const addTwoNumbers = (l1, l2) => {
  //   const stack1 = listToStack(l1);
  //   const stack2 = listToStack(l2);
  //   let result = new Node(null);
  //   let carry = 0;
  //   while (stack1.length > 0 || stack2.length > 0 || carry === 1) { 
  //     const val1 = stack1.pop() ?? 0;
  //     const val2 = stack2.pop() ?? 0;
  
  //     const sum = val1 + val2 + carry;
  //     if (sum >= 10) {
  //       carry = 1;
  //     } else {
  //       carry = 0;
  //     }
  
  //     const digit = sum % 10;
  //     const newNode = new Node(digit); 
  //     const oldNext = result.next;
  //     result.next = newNode;
  //     newNode.next = oldNext;
  //   }
  
  //   return result.next;
  // };
  
  
  // rc -> a -> b
  
  // rc ->  c -> a -> b
  
  // const stack = [];
  // const val = stack.pop() || 42; // when stack is empty, substitute
  // console.log(val);
  
  // const stack = [0];
  // const val = stack.pop() || 0; // when stack is not empty, substute
  // console.log(val);
  
  
  // const listToStack = (head) => {
  //   let stack = []
  //   let curr = head;
  //   while (curr !== null) {
  //     stack.push(curr.val);
  //     curr = curr.next;
  //   }
  
  //   return stack;
  // }
  
  const printList = (head) => {
    let curr = head;
    while (curr) {
      console.log(curr.val);
      curr = curr.next;
    }
  };
  
  const listToString = (head) => {
    if (head === null)
      return '';
    return head.val + listToString(head.next);
  };
  
  
  
  const addTwoNumbers = (a1, b1) => {
    const num1 = Number(listToString(a1));
    const num2 = Number(listToString(b1));
    const result = num1 + num2;
    const resultData = String(result);
    return createLinkedList(resultData);
  };
  
  
  
  const createLinkedList = (string) => {
    if (string.length === 0)
      return null;
    const node = new Node(Number(string[0]));
    node.next = createLinkedList(string.slice(1));
    return node;
  };
  
  
  const resultList = addTwoNumbers(a1, b1);
  printList(resultList);
  // const res = createLinkedList('423');
  
  // printList(res);
  
  
  