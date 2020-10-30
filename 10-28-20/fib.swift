func fib(n: Int) -> Int {
  var newMemo:[Int:Int] = [:]
  return _fib(n: n, memo: &newMemo)
}

func _fib(n: Int, memo: inout Dictionary<Int, Int>) -> Int {
  guard memo[n] == nil else { return memo[n]! }
  guard n > 2 else { return 1 }

  memo[n] = _fib(n: n - 1, memo: &memo) + _fib(n: n - 2, memo: &memo)
  return memo[n]!
}

print(fib(n: 6)) // 8
print(fib(n: 7)) // 13
print(fib(n: 8)) // 21
print(fib(n: 9)) // 34
print(fib(n: 42)) // 267914296
