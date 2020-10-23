from collections import defaultdict
from typing import List

class Solution:
  def equationsPossible(self, equations: List[str]) -> bool:
    graph = defaultdict(list)

    equals = [ eq for eq in equations if eq[1:3] == "=="  ]
    non_equals = [eq for eq in equations if eq[1:3] == "!=" ]
    print(equals)
    print(non_equals)


    for eq in equations:
        node_1 = eq[0]
        node_2 = eq[-1]
        graph[node_1].append(node_2)
        graph[node_2].append(node_1)

    for eq in equations:
        node_1 = eq[0]
        node_2 = eq[-1]
        if dfs(graph, node_1, node_2, set()) == True:
          return False

    return True


# passing in one visited set to be shared among all sibling recursive calls
def dfs(graph, node, target, visited):
  if node in visited:
    return False

  visited.add(node)

  if node == target:
    return True

  for neighbor in graph[node]:
    if dfs(graph, neighbor, target, visited) == True:
      return True

  return False



s = Solution()
# print(s.equationsPossible(["a==b","b==c","a==c"])) # t
print(s.equationsPossible(["a==b","b!=c","c==a"])) # f


# def dfs(graph, node, target, visited):
#   if node in visited:
#     return

#   visited.append(node)

#   if node == target:
#     print(visited)
#     return

#   for neighbor in graph[node]:
#     dfs(graph, neighbor, target, list(visited))



# graph = {
#   "a": ["b", "c", "d"],
#   "b": ["e"],
#   "c": ["e"],
#   "d": ["e"],
#   "e": [],
# }

visited = []
dfs(graph, "a", "e", visited)
# print(visited)

# s = Solution()
# print(s.equationsPossible(["a==b","b==c","a==c"])) # t
# print(s.equationsPossible(["a==b","b!=c","c==a"])) # f

# graph = {
#   "a": ["b"],
#   "b": ["c"],
#   "c": []
# }
# print(dfs(graph, "a", "c", set()))



# "a==b","b!=c","c==a"
# graph = {
#   a: [b, c],
#   c: [a],
#   b: [a]
# }


# dfs(graph, a, c, set()) # true


# s = Solution()
# s.equationsPossible(["a==b","b==c","a==c"])
# s.equationsPossible(["a==b","b!=c","c==a"])

#
# graph = {
#   a: [b],
#   c: [a],
#   b: []
# }

# graph['b']
