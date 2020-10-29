// Swift doesn't like mutating arguments. Use the keyword `inout` to allow for this.
func gridTravelerHelper(_ m: Int, _ n: Int, _ memo: inout [String: Int]) -> Int {
  let key = "\(m), \(n)"
  if let val = memo[key] { // memo checking logic
    return val
  }

  if m == 0 || n == 0 {
    return 0
  }

  if m == 1 || n == 1 {
    return 1
  }

  let numWaysGoingDown = gridTravelerHelper(m - 1,n, &memo)
  let numWaysGoingRight = gridTravelerHelper(m, n - 1, &memo)
  memo[key] = numWaysGoingDown + numWaysGoingRight
  // The value at memo[key] *could* be nil so we use `!` to denote that we're sure there's a value.
  return memo[key]!
}

func gridTraveler(row: Int, column: Int) -> Int {
  // Helper function to pass in memo as a `var` (mutable variable)
  var memo = [String: Int]()
  return gridTravelerHelper(row, column, &memo)
}

print(gridTraveler(row: 2, column: 3)) // 3
print(gridTraveler(row: 3, column: 2)) // 3
print(gridTraveler(row: 3, column: 3)) // 6
print(gridTraveler(row: 16, column: 16)) // 155117520