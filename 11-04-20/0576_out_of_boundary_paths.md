# 576. Out of Boundary Paths [Medium]

##### <a href="https://leetcode.com/problems/out-of-boundary-paths/" target="_blank">Out of Boundary Paths</a>

```
There is an m by n grid with a ball. Given the start coordinate (i,j) of the ball, you can move the ball to 
adjacent cell or cross the grid boundary in four directions (up, down, left, right). However, you can at 
most move N times. Find out the number of paths to move the ball out of grid boundary. 
The answer may be very large, return it after mod 109 + 7.
```

```
Example 1:
Input: m = 2, n = 2, N = 2, i = 0, j = 0
Output: 6
```
<img width="400" alt="Example 1" src="https://assets.leetcode.com/uploads/2018/10/13/out_of_boundary_paths_1.png">

<br><br>

```
Example 2:
Input: m = 1, n = 3, N = 3, i = 0, j = 1
Output: 12
```
<img width="400" alt="Example 2" src="https://assets.leetcode.com/uploads/2018/10/12/out_of_boundary_paths_2.png">

<br><br>

<img src="https://i.imgur.com/eLNRZyL.png" width="800" alt="Recursive Tree">

<br><br>

##### `Recursive Dynamic Programming`
```js
function isOutOfBounds(m, n, i, j) {
  return i < 0 || j < 0 || i >= m || j >= n;
}

// m = row (i)
// n = col (j)

// O(N*m*n) time | O(N*m*n) space
function findPaths(m, n, N, i, j, memo={}) {
  const key = `${N},${i},${j}`;
  if (key in memo) return memo[key];

  if (N >= 0 && isOutOfBounds(m, n, i, j)) {
    return 1;
  } else if (N <= 0 && !isOutOfBounds(m, n, i, j)) {
    return 0;
  }

  const left = findPaths(m, n, N - 1, i, j - 1, memo);
  const right = findPaths(m, n, N - 1, i, j + 1, memo);
  const up = findPaths(m, n, N - 1, i - 1, j, memo);
  const down = findPaths(m, n, N - 1, i + 1, j, memo);

  memo[key] = (left + right + up + down) % (10**9 + 7);
  return memo[key];
}

// space complexity is NOT O(N) because the size of memo 
// will be as large as all unique combos of N*m*n
```

<br><br>

##### `Brute Force`
```js
// O(4^N) time | O(N) space
function findPaths(m, n, N, i, j) {
  if (N >= 0 && isOutOfBounds(m, n, i, j)) {
    return 1;
  } else if (N <= 0 && !isOutOfBounds(m, n, i, j)) {
    return 0;
  }

  const left = findPaths(m, n, N - 1, i, j - 1);
  const right = findPaths(m, n, N - 1, i, j + 1);
  const up = findPaths(m, n, N - 1, i - 1, j);
  const down = findPaths(m, n, N - 1, i + 1, j);

  return (left + right + up + down) % (10**9 + 7);
}
```
