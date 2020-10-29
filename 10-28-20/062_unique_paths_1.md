# 62. Unique Paths [Medium]

##### <a href="https://leetcode.com/problems/unique-paths/" target="_blank">Unique Paths I</a>

```
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time.
The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3

Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
```

<img src="https://i.imgur.com/8QUZcnH.png">

<br><br>

```JavaScript
// x = max between m and n
// w/o dynamic programming - O(2^x) time and O(x) space
// bigger dimension dominates complexity

// w/ dynamic programming - O(m*n) time and O(x) space
// uniquePaths(m, n) = uniquePaths(n, m)
function uniquePaths(m, n, memo={}) {
  const key = `(${m},${n})`;
  if (key in memo) return memo[key];

  if (m === 0 || n === 0) {
    return 0;
  } else if (m === 1 || n === 1) {
    return 1;
  }

  const down = uniquePaths(m - 1, n, memo);
  const right = uniquePaths(m, n - 1, memo);
  memo[key] = down + right;
  memo[`(${n},${m})`] = down + right;               // as m->∞ and n->∞ this is not significant

  return memo[key];
}
```
