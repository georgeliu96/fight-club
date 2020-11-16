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

##### `Recursive Solution`
```js
// m = length of str1
// n = length of str2
// all unique combos of m*n

// O(m*n) time | O(m*n) space
function minDistance(str1, str2, i=0, j=0, memo={}) {
  const key = `${i}-${j}`;
  if (key in memo) return memo[key];
  if (i >= str1.length) {
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

<br><br>
<img src="https://i.imgur.com/AK51vy6.png" width="700">
<br><br>

##### `Iterative Solution`
```js
// m = length of str1
// n = length of str2

// O(m*n) time | O(m*n) space
function minDistance(str1, str2) {
  const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1));

  // fill in the first row and col
  for (let i = 0; i < Math.max(dp.length, dp[0].length); i++) {
    if (i < dp[0].length) dp[0][i] = i;
    if (i < dp.length) dp[i][0] = i;
  }

  for (let row = 1; row < dp.length; row++) {
    for (let col = 1; col < dp[0].length; col++) {
      const min = Math.min(dp[row - 1][col - 1], dp[row - 1][col], dp[row][col - 1]);
      dp[row][col] = str1[row - 1] === str2[col - 1] ? dp[row - 1][col - 1] : min + 1;
    }
  }  

  return dp[str1.length][str2.length];
}
```
* Note: to calculate the edit distance up to any given substring, we only need to reference its neighboring 2 rows
* We can improve the space complexity to only store 2 rows

<br><br>
<img src="https://i.imgur.com/wupC4a8.png" width="700">
<br><br>

```js
// m = length of str1
// n = length of str2

// O(m*n) time | O(min(m, n)) space
function minDistance(str1, str2) {
  const dp = new Array(2).fill(0).map(() => new Array(Math.min(str1.length, str2.length) + 1));

  // fill in first row
  for (let i = 0; i < dp[0].length; i++) {
    dp[0][i] = i;
  }

  let n = 1;
  while (n <= Math.max(str1.length, str2.length)) {
    for (let col = 0; col < dp[0].length; col++) {
      if (col === 0) {
        dp[1][0] = dp[0][0] + 1;
      } else {
        const min = Math.min(dp[0][col], dp[1][col - 1], dp[0][col - 1]);
        const match = str1.length > str2.length ? str1[n - 1] === str2[col - 1] : str2[n - 1] === str1[col - 1];
        dp[1][col] = match ? dp[0][col - 1] : min + 1;
      }
    }

    dp[0] = dp[1];
    dp[1] = [];
    n++;
  }

  return dp[0][dp[0].length - 1];
}
```