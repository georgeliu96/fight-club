# Say you are a traveler on a 2D grid. You start at the top left (0, 0). The grid has size m * n.
# Your goal is to get to the bottom right (m - 1, n - 1). You can only go right or down.
# How many different ways can u get to the goal?

def grid_traveler(m, n, memo = {})
  key = m.to_s + ',' + n.to_s
  return memo[key] if memo.has_key?(key)
  return 0 if m == 0 || n == 0
  return 1 if m == 1 && n == 1

  memo[key] = grid_traveler(m - 1, n, memo) + grid_traveler(m, n - 1, memo)
  memo[key]
end

p grid_traveler(2, 3) # 3 
p grid_traveler(3, 2) # 3
p grid_traveler(3, 3) # 6
p grid_traveler(16, 16) # 155117520


