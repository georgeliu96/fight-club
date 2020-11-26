function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
  
  const reverseList = function (head, prev=null) {
    if (head === null)
      return prev;
    const next = head.next;
    head.next = prev;
    return reverseList(next, head);
  };
  
  const printList = (head) => {
    if (head === null)
      return;
    console.log(head.val);
    printList(head.next);
  }
  
  const reverseListIter = function (head) {
    let curr = head;
    let prev = null;
    while (curr !== null) {
      const next = curr.next;
      curr.next = prev;
      prev = curr
      curr = next;
    }
    return prev;
  };
  
  const a = new ListNode("a");
  const b = new ListNode("b");
  const c = new ListNode("c");
  const d = new ListNode("d");
  const e = new ListNode("e");
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  // TODO: return the new head plz
  const newHead = reverseListIter(a);
  printList(newHead)
  
  
  // const foo = (num) => {
  //   console.log(num);
  // }
  
  // foo(42);