# Dynamic Programming
#     => is a programming technique used to solve large problems efficiently, by reusing subsolutions

# Write a function, canConstruct, that takes in a target string and an array of strings.
# The function should return a boolean indicating whether or not
# the target string can be constructed using strings in the array.



# def can_construct(target, subs):
#   if not target:
#     return True
#   for prefix in subs:
#     if prefix == target[0:len(prefix)]:
#       remainder = target[len(prefix):]
#       if can_construct(remainder, subs) == True:
#         return True
#   return False
  
# n = len of target
# m = len of subs array
# O(n * m) 
# O(n ^ m) 


# print(can_construct('abcd', ['a', 'b', 'ab', 'cd'])) # true
# print(can_construct('soccer', ['er', 'so', 'c'])) # true
# print(can_construct('bootcamp', ['boo', 'boot', 'camp'])) # true
# print(can_construct('bootcamp', ['boo', 'boots', 'camp'])) # false
# print(can_construct('', ['apple', 'banana', 'o'])) # true
# print(can_construct('', ['a', 'b'])) # true


# target = 'abcd'
# print(target[7:])


# print(can_construct('abc', ['abcdefg'])) # false




# def how_construct(target, subs):
#   if not target:
#     return []
#   for prefix in subs:
#     if prefix == target[0:len(prefix)]:
#       remainder = target[len(prefix):]
#       result = how_construct(remainder, subs)
#       if result != None:
#         return [ prefix, *result ]
#   return None
  



# print(how_construct('abcd', ['a', 'b', 'ab', 'cd'])) # ['a', 'b', 'cd], ['ab', 'cd]
# print(how_construct('abcdz', ['a', 'b', 'ab', 'cd'])) # None

# print(how_construct('', ['a', 'b', 'ab', 'cd'])) # []



