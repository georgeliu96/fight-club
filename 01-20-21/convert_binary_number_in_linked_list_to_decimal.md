# <a href="https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" target="_blank">1290. Convert Binary Number in a Linked List to Integer [Easy]</a>

```
Given head which is a reference node to a singly-linked list. 
The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.


Example:
Input: [1, 0, 1, 1]
Output: 11

 2^3   2^2   2^1   2^0
[1,     0,    1,    1 ]

8 + 0 + 2 + 1 = 11
```

<br>
<img src="https://i.imgur.com/sDZlBwF.png" alt="Binary to Decimal" width="800">
<br><br>

```js
// O(n) time | O(1) space
function getDecimalValue(head) {
  let sum = 0;
  let current = head;

  while (current) {
    sum *= 2;
    sum += current.val;
    current = current.next;
  }

  return sum;
}
```

<br>

```js
// O(n) time | O(1) space
function getDecimalValue(head) {
  let exp = getSize(head) - 1;
  let current = head;
  let sum = 0;

  while (current) {
    sum += (2**exp) * current.val;
    current = current.next;
    exp--;
  }

  return sum;
}

function getSize(head) {
  let size = 0;
  let current = head;

  while (current) {
    size++;
    current = current.next;
  }

  return size;
}
```