// =================================================================
// 990. Satisfiability of Equality Equations
// https://leetcode.com/problems/satisfiability-of-equality-equations/
// =================================================================


// create a graph with "==" relationships
// undirected, if a==b, then b==a

// [ "a==b", "b==c", "a==c"]
// graph = {
//   a: ["b", "c"],
//   b: ["c", "a"],
//   c: ["a", "b"]
// }

// [ "a==b", "x!=z" ]
// graph = {
//   a: ["b"],
//   b: ["a"],
//   x: [],
//   z: [],
// }


// n = number of equations
// m = number of vertices

// O(n) time and O(m) space
const constructGraph = equations => {
  const graph = {};                                                 // O(m) space
  
  equations.forEach(equation => {                                   // O(n) time
    const vertex1 = equation[0];   
    const vertex2 = equation[3];         

    if (equation.slice(1,3) === "==") {                             // O(1) time (always length of 4)
      vertex1 in graph ? graph[vertex1].push(vertex2) : graph[vertex1] = [ vertex2 ];
      vertex2 in graph ? graph[vertex2].push(vertex1) : graph[vertex2] = [ vertex1 ];
    } else {
      vertex1 in graph ? null : graph[vertex1] = [];
      vertex2 in graph ? null : graph[vertex2] = [];
    }
  });
  
  return graph;
}



// O(m) time and O(m) space; 
const dfs = (graph, node, target, visited=new Set()) => {
  if (visited.has(node)) return false;
  visited.add(node);

  if (node === target) return true;
  const neighbors = graph[node];

  for (let i = 0; i < neighbors.length; i++) {
    const result = dfs(graph, neighbors[i], target, visited);
    if (result) return true;
  }

  return false;
}



// loop through each equation, if sign is !=
// but a path exist from node A to B, return false

// O(m*n) time and O(m) space
const equationsPossible = equations => {
  const graph = constructGraph(equations);                          // O(n) time + O(m) space
  
  for (let i = 0; i < equations.length; i++) {                      // O(n) time
    if (equations[i].slice(1,3) === "!=") {
      const hasPath = dfs(graph, equations[i][0], equations[i][3]); // O(m) time
      if (hasPath) return false;
    }
  }
  
  return true;
}

// O(m*n) => O(n) if vertices are only alphabetical characters
// O(m) space => array of varying size even if number of vertices are constant