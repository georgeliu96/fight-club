# def fib(n)
#   return 1 if n == 1 || n == 2
#   return fib(n - 1) + fib(n - 2)
# end

def fib(n, memo={})
  return memo[n] if memo.has_key?(n)
  return 1 if n == 1 || n == 2
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
  return memo[n]
end

p fib(6) # 8
p fib(7) # 13
p fib(8) # 21
p fib(45) # 1134903170
