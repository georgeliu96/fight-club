class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const headOne = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;

const z = new Node(3);
const y = new Node(7);
const x = new Node(-5);
const w = new Node(10);
const v = new Node(1);
const headTwo = z;
z.next = y;
y.next = x;
x.next = w;
w.next = v;


// Write a fn that takes in the head of a LL and prints values of all nodes in order
const printListRecursively = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printListRecursively(head.next);
};


// Write a fn that takes in the head of a LL and returns a string containing all values of the list concated together
const stringifyListRecursively = (head) => {
  if (!head) {
    return '';
  }

  return head.val + stringifyListRecursively(head.next);
};

const stringifyListIteratively = (head) => {
  let string = '';
  let current = head;
  while (current) {
    string += current.val;
    current = current.next;
  }

  return string;
};


// Write a fn that takes in a LL containing numbers as values and returns the sum of the LL
const sumListRecursively = (head) => {
  if (!head) {
    return 0;
  }

  return head.val + sumListRecursively(head.next);
};


// Write a fn that takes in a LL and a target value and returns a bool indicating if the target is in the LL
const containsRecursively = (head, target) => {
  if (!head) {
    return false;
  }
  if (head.val === target) {
    return true;
  }

  return containsRecursively(head.next, target);
};
