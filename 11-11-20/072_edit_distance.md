# <a href="https://leetcode.com/problems/edit-distance/">Edit Distance [Hard]</a>

```
Given two strings word1 and word2, return the minimum number of operations required to 
convert word1 to word2.

You have the following three operations permitted on a word:
Insert a character
Delete a character
Replace a character
 

Example 1:
Input: word1 = "horse", word2 = "ros"
Output: 3

Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
```

<br><br>
<img src="https://i.imgur.com/NeLFR0n.png">
<br><br>

```js
// m = length of str1
// n = length of str2
// all unique combos of m*n

// O(m*n) time | O(m*n) space
function minDistance(str1, str2, i=0, j=0, memo={}) {
  const key = `${i}-${j}`;
  if (key in memo) return memo[key];
  if (i >= str1.length ) {
    return str2.length - j;
  } else if (j >= str2.length) {
    return str1.length - i;
  }

  const ins = minDistance(str1, str2, i, j + 1, memo) + 1;
  const del = minDistance(str1, str2, i + 1, j, memo) + 1;
  const rep = minDistance(str1, str2, i + 1, j + 1, memo) + (str1[i] === str2[j] ? 0 : 1);

  memo[key] = Math.min(ins, del, rep);
  return memo[key];
}
```