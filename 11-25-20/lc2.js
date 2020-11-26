
// BOOL OPS: AND, OR, NOT
// LOGICAL OPERATORS: &&, ||, !
// BINARY OPERATORS: &, |, ~, ^, <, >

// sum = 12
// ~1.2 = -2
// ~~1.2 = 1
// ~~(sum/10)
// Behaves the same as Math.floor except for negative cases

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  const addTwoNumbers = function(l1, l2, carry=0) {
    if (l1 === null && l2 === null && carry === 0)
      return null;    
    
    const l1Val = l1 === null ? 0 : l1.val;
    const l2Val = l2 === null ? 0 : l2.val;
  
    const sum = l1Val + l2Val + carry;
    if (sum >= 10) {
      carry = 1;
    } else {
      carry = 0;
    }
    const digit = sum % 10;
    const resultHead = new ListNode(digit);
  
    const l1Next = l1 === null ? l1 : l1.next;
    const l2Next = l2 === null ? l2 : l2.next;
    
    resultHead.next = addTwoNumbers(l1Next, l2Next, carry);
    return resultHead;
  };
  
  
  const a = new ListNode(9);
  const b = new ListNode(9);
  const c = new ListNode(9);
  a.next = b;
  b.next = c;
  
  
  const x = new ListNode(3);
  const y = new ListNode(2);
  // const z = new ListNode(1);
  x.next = y;
  // y.next = z;
  
  // 235 + 123 = 3 5 8
  // 
  // 5 -> 3 -> 2
  // 3 -> 2 -> 1
  
  // 8 -> 5 -> 3
  
  // 235 + 23 = 258
  // 8 -> 5 -> 2
  
  const strList = (head) => {
    if (head === null)
      return '';
    return head.val + strList(head.next);
  }
  
  console.log(strList(a));
  console.log(strList(x));
  const result = addTwoNumbers(a, x);
  console.log(strList(result));
  