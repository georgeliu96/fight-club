// https://leetcode.com/problems/triangle/

const minimumTotal = (triangle, r=0, c=0, memo={}) => {
    const key = r + ',' + c;
    // base
    if (key in memo)
      return memo[key];
  
    if (r === triangle.length - 1) {
      return triangle[r][c];
    }
  
    // recursive
    const leftSum = minimumTotal(triangle, r + 1, c, memo);
    const rightSum = minimumTotal(triangle, r + 1, c + 1, memo);
    memo[key] = triangle[r][c] + Math.min(leftSum, rightSum);
    return memo[key];
  };
  
  const triangle = [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
  ];
  
  // n = triangle.length
  
  // brute force
  // time: O(2^n)
  
  // memoized
  // time: O(n^2)
  console.log(minimumTotal(triangle));