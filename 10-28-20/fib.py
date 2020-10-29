# small / fast
# O(1) - constant
# O(logn) - logarithmic
# O(n) - linear
# O(nlogn) - quasilinear / linearithmic / loglinear 
# O(n^c) - n^2, n^3, n^4 - polynomial
# O(c^n) - 2^n, 3^n, ... - exponential
# O(n!) - factorial
# big / slow

#     n  -> 1 2 3 4 5 6 7  8
# fib(n) -> 1 1 2 3 5 8 13 21 ...
# def fib(n):
#   if n == 1 or n == 2:
#     return 1
#   return fib(n - 1) + fib(n - 2)
# O(2^n) time - exponential


def foo(n):
  if n <= 0:
    return 
  foo(n - 1)
# O(n) time
#      6 -> 5 -> 4 -> 3 -> 2 -> 1 -> 0


def bar(n):
  if n <= 0:
    return 
  bar(n - 2)
# O(n/2) = O(1/2 * n) = O(n) time
#      6 -> 4 -> 2 -> 0


def zoop(n):
  if n <= 0:
    return 
  zoop(n - 1)
  zoop(n - 1)
# O(2^n) time
#              4
#           /     \
#          3       3
#       /    \    /    \
#      2     2   2     2 
#     / \    /\  / \    /\
#    1   1   1 1 1 1    1 1

# 2^4 = 2 * 2 * 2 * 2 
# 2^n = 2 * 2 * ... * 2


def zap(n):
  if n <= 0:
    return 
  zap(n - 1)
  zap(n - 1)
  zap(n - 1)
# O(3^n)


def boom(n):
  if n <= 0:
    return 
  boom(n - 2)
  boom(n - 2)
# O(2^n) time

#              6
#           /     \
#          4       4
#       /    \    /    \
#      2     2   2     2 
#     / \    /\  / \    /\
#    0   0   0 0 0  0   0 0
#  O(2^(n/2)) -> O(2^n)


def fake_fib(n):
  if n <= 0:
    return 
  fake_fib(n - 1)
  fake_fib(n - 2)

# O(2^n)

# 2^n <= O(fib) <= 2^n 

# dynamic programming
#   -> taking a large problem and breaking it down recursively into subproblems of the same shape
#   -> store duplicate subsolutions to be used later on

def fib(n, memo={}):
  if n in memo: # memo checking logic
    return memo[n]
  if n == 1 or n == 2:
    return 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]

# BADDDDDDD
# def fib(n, memo={}):

#   if n == 1 or n == 2:
#     return 1

#   if (n - 1 in memo):
#     left_res = memo[n - 1]

#   if (n - 2 in memo):
#     right_res = memo[n - 2]
#   # fib(n - 1, memo) + fib(n - 2, memo)
#   return

# print(fib(6)) # 8
print(fib(45)) # ?

#     n  -> 1 2 3 4 5 6 7  8
# fib(n) -> 1 1 2 3 5 8 13 21 ...


# default args in py are initialized ONCE 
def weird_foo(b = []):
  print(id(b))


weird_foo()
weird_foo()


# Python specific solution to not have memo only initialized once
# def fib(n, memo=None):
#   if memo is None:
#     memo = {}
#   if n in memo: # memo checking logic
#     return memo[n]
#   if n == 1 or n == 2:
#     return 1

#   memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
#   return memo[n]



# Say you are a traveler on a 2D grid. You start at the top left (0, 0). The grid has size m * n.
# Your goal is to get to the bottom right (m - 1, n - 1). You can only go right or down.
# How many different ways can u get to the goal??????


def grid_traveler(m, n, memo=None):
  if memo is None:
    memo = {}

  key = (m, n)
  if key in memo:# memo checking logic
    return memo[key]

  if m == 0 or n == 0:
    return 0
  if m == 1 or n == 1:
    return 1

  num_ways_going_down = grid_traveler(m - 1, n, memo)
  num_ways_going_right = grid_traveler(m, n - 1, memo)
  memo[key] = num_ways_going_down + num_ways_going_right
  return memo[key]

# print(grid_traveler(2, 3)) # 3
# print(grid_traveler(3, 2)) # 3
# print(grid_traveler(3, 3)) # 6
print(grid_traveler(16, 16)) # 155117520



# O(2^x) time x is the max(m, n)


m = 41
n = 2


m = 2
n = 41



# 41,2
# 4,12 