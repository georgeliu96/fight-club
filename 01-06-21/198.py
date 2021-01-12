# https://awwapp.com/b/uaap4qd02dlzs/


# Alvins recipe
#  - X make the brute force solution 
#  - X add an additional shared memo dict
#    - keys will be the arg(s) to the fn, vals will be the return values of the arg
#  - X add a basecase check if the args are already in the memo
#  - X when you return, store the result in the memo  

import datetime



class Solution:
  def rob(self, nums):
    return self._rob(nums, {})

  def _rob(self, nums, memo):
    key = tuple(nums)
    if key in memo:
      return memo[key]
    if len(nums) == 0:
      return 0
    left = self._rob(nums[1:], memo)
    right = nums[0] + self._rob(nums[2:], memo)
    memo[key] = max(left, right)
    return memo[key]



  def rob_faster(self, nums):
    return self._rob_faster(nums, 0 , {})

  def _rob_faster(self, nums, start, memo):
    if start in memo:
      return memo[start]
    if start >= len(nums):
      return 0
    left = self._rob_faster(nums, start + 1, memo)
    right = nums[start] + self._rob_faster(nums, start + 2, memo)
    memo[start] = max(left, right)
    return memo[start]
    


array = []
for i in range(0, 800):
  array.append(5)

s = Solution()

start = datetime.datetime.now()
s.rob(array)
end = datetime.datetime.now()
diff = end - start
print(diff.microseconds)



start = datetime.datetime.now()
s.rob_faster(array)
end = datetime.datetime.now()
print((end - start).microseconds)
