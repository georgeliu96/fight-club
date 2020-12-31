
// '0': [ 1 ]
// must take 1 before 0

// can only visit a node once all its parents are visited
// Topological Sort
//   given a graph, visit the nodes in an order where all parents are visited
//   before their children
// Only non cyclic graphs can be top-sorted

// Complexity
// N = numCourses
// Time: O(2n + n^3) = O(n^3)
const canFinish = function(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const visited = new Set();
    let madeProgress = true;
  
    while (madeProgress) {
      madeProgress = false;
      for (let node in graph) {
        const parents = graph[node];
        const allParentsVisited = parents.every((parent) => visited.has(String(parent)));
        // if all node's parents are vis, and this not is not yet vis
        if (allParentsVisited && !visited.has(String(node))) {
          madeProgress = true;
          visited.add(node);
        }
      }
    }
  
    return visited.size === numCourses;
  };
  
  const findOrder = function(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const visited = new Set();
    const order = [];
    let madeProgress = true;
  
    while (madeProgress) {
      madeProgress = false;
      for (let node in graph) {
        const parents = graph[node];
        const allParentsVisited = parents.every((parent) => visited.has(String(parent)));
        // if all node's parents are vis, and this not is not yet vis
        if (allParentsVisited && !visited.has(String(node))) {
          madeProgress = true;
          visited.add(node);
          order.push(node);
        }
      }
    }
  
  
    if (visited.size === numCourses) {
      return order;
    } else {
      return [];
    }
  };

  // 0 <-> 1
  
  const buildGraph = (numNodes, edges) => {
    const graph = {};
  
    for (let i = 0; i < numNodes; i += 1) {
      graph[i] = [];
    }
  
    for (let edge of edges) {
      const [a, b] = edge;
      graph[a].push(b);
    }
  
    return graph;
  };
  
  console.log(canFinish(2, [[1,0], [0,1]])); // false
  console.log(canFinish(3, [[1,0], [0,1], [1, 2]])); // false
  console.log(canFinish(2, [[1,0]])); // true
  // {1:[0] , 0:[]}
  