# combinationSum([1,2,3], 0)  => []
# combinationSum([2,3,6,7], 7) => [[2,2,3], [7]]
# combinationSum([2,3,5], 8) => [[2,2,2,2], [2,3,3], [3,5]]

# https://pastebin.com/ZtFfULkM
# https://leetcode.com/problems/combination-sum/
# https://docs.google.com/drawings/d/1wGSLqHMI4PhusvY6BCqY55mPp0ZTLDN3YahuktCiU0U/edit?usp=sharing

class Solution:
    def combinationSum(self, candidates, target):
      if target == 0:
        return [[]]

      if len(candidates) == 0:
        return []

      if target < 0:
        return []

      possibilities = []

      num, *rest = candidates
      # iterate through all possible qty's of this num
      qty = 0
      while qty * num <= target: # the qty is valid
        remainder = target - (num * qty)
        my_nums = [num] * qty
        combinations_for_remainder = self.combinationSum(rest, remainder)
        for comb in combinations_for_remainder:
          final_comb = my_nums + comb
          possibilities.append(final_comb)
        qty += 1

      return possibilities
      
s = Solution()     
print(s.combinationSum([2,3,5], 8))

# print(s.combinationSum([], 8)) #[]

# print(s.combinationSum([], 0)) # [ [] ]



