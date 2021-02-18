// https://leetcode.com/problems/maximum-length-of-pair-chain/

// const findLongestChain = (pairs, latest = -Infinity) => {
//     let longest = -1;

//     for (let pair of pairs) {
//       const [ first, second ] = pair;
//       if (first > latest) {
//         const subLength = findLongestChain(pairs, second);
//         longest = Math.max(subLength, longest);
//       }
//     }

//     return 1 + longest;
// };

// n is the length of the pairs array
// O(n * n = n^2) time
// O(n + n = n) space

const findLongestChain = (pairs, latest = -Infinity, memo={}) => {
    if (latest in memo)
      return memo[latest];
  
    let longest = 0;
  
    for (let pair of pairs) {
      const [ first, second ] = pair;
      if (first > latest) {
        const subLength = 1 + findLongestChain(pairs, second, memo);
        longest = Math.max(subLength, longest);
      }
    }
  
    memo[latest] = longest;
    return longest;
  };
  
  
  
  console.log(findLongestChain([[1,2], [2,3], [3,4]])); // 2
  console.log(findLongestChain([])); // 0
  console.log(findLongestChain([[1,2]])); // 1
  
  