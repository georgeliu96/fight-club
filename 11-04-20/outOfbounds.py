# https://leetcode.com/problems/out-of-boundary-paths/


MOD_VALUE = 10**9 + 7

class Solution:
    # Non-optimized solution 
    # Time complexity is: 4**N (4^N)
    def findPaths(self, m: int, n: int, N: int, i: int, j: int) -> int:
        is_in_bounds = 0 <= i < m and 0 <= j < n
          
        if not is_in_bounds:
          return 1

        if N == 0:
          return 0

        count = 0

        pos_delta = [(0, -1), (0, 1) , (1, 0), (-1, 0)]
        for delta in pos_delta:
          count += self.findPaths(m, n, N - 1, i + delta[0], j + delta[1])

        return count

    # Optimized (through memoization) solution 
    def findPathsFast(self, m: int, n: int, N: int, i: int, j: int, memo=None) -> bool:
        if memo is None:
          memo = {}

        key = (N, i, j)
        if key in memo:
          return memo[key]
        is_in_bounds = 0 <= i < m and 0 <= j < n
          
        if not is_in_bounds:
          return 1

        if N == 0:
          return 0

        count = 0

        pos_delta = [(0, -1), (0, 1) , (1, 0), (-1, 0)]
        for delta in pos_delta:
          count += self.findPathsFast(m, n, N - 1, i + delta[0], j + delta[1], memo)

        memo[key] = count % MOD_VALUE
        return count % MOD_VALUE

s = Solution()
print(s.findPaths(2, 2, 2, 0, 0)) # 6
print(s.findPaths(1, 3, 3, 0, 1)) # 12

print(s.findPathsFast(7, 6, 13, 0, 2)) # ?




# Dynamically Typed (py, js, rb)
#     - do not need to qualify a var with a type
#     VS
# Statically Typed (java, c++, typescript)
#     - need to qualify a var with a type


# Strongly Typed (rb, py)
#     - cannot coerce operations among "different" type
#   VS
# Weakly Typed (js)
#     - can coerce operations among "different" type
#  



# 72
# 1143
# 147
# 1478
# 269