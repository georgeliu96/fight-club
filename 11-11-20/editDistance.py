# https://awwapp.com/b/udt1s8msalpal/
# https://prod.liveshare.vsengsaas.visualstudio.com/join?2E3D79D3B7F74604DF94C68133C59B718F9B
# https://leetcode.com/problems/edit-distance/


class Solution:
  def minDistance(self, str1, str2, memo=None):
    if memo is None:
      memo = {}

    key = (str1, str2)

    if key in memo:
      return memo[key]

    if not str1:
      return len(str2)

    if not str2:
      return len(str1)
    
    delete = self.minDistance(str1[1:], str2, memo) + 1
    insertion = self.minDistance(str1, str2[1:], memo) + 1

    if str1[0] == str2[0]:
      replacement_cost = 0
    else:
      replacement_cost = 1

    replacement = self.minDistance(str1[1:], str2[1:], memo) + replacement_cost

    memo[key] = min(delete, insertion, replacement)
    return memo[key]


word1 = "horse"
word2 = "ros"
print(minDistance(word1, word2)) # 3




def sumArray(arr, i = 0):
  if i == len(arr):
    return 0

  return arr[i] + sumArray(arr, i + 1)

print(sumArray([3, 7, 10])) # 20
