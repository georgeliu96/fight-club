# <a href="https://leetcode.com/problems/course-schedule-ii/" target="_blank">210. Course Schedule II [Medium]</a>

```
There are a total of n courses you have to take labelled from 0 to n - 1.

Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course
bi before the course ai.

Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you
should take to finish all courses.

If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.


Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the
correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2.
Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]


Constraints:
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
```

<br>

* Topological Sort
* Linear time solutions:
  * Postorder DFS
  * Kahn's Algorithm - visit nodes with 0 indegree dependencies

<br>

##### `Solution 1 - Postorder DFS`

<img src="https://i.imgur.com/ITSHZcE.png" alt="Postorder DFS" width="700">
<br><br>

```js
// v = number of courses (vertices)
// e = number of prereqs (edges)

// O(v+e) time | O(v+e) space
function findOrder(numCourses, prereqs) {
  const graph = buildGraph(numCourses, prereqs);
  const visited = new Set();
  const visiting = new Set();
  const order = [];

  for (const [ course, prereqs ] of graph.entries()) {
    if (!visited.has(course)) {
      const hasCycle = dfs(graph, course, visited, visiting, order);

      if (hasCycle) {
        return [];
      }  
    }
  }

  return order;
}

// return true if graph contains cycle
function dfs(graph, node, visited, visiting, order) {
  if (visiting.has(node)) {
    return true;
  } else if (visited.has(node)) {
    return false;
  }

  visiting.add(node);
  const prereqs = graph.get(node);

  for (let i = 0; i < prereqs.length; i++) {
    if (!visited.has(prereqs[i])) {               // don't add to stack if already visited
      const hasCycle = dfs(graph, prereqs[i], visited, visiting, order);

      if (hasCycle) {
        return true;
      }  
    }
  }

  visited.add(node);
  visiting.delete(node);
  order.push(node);
  return false;
}

function buildGraph(n, dependencies) {     
  const graph = new Map();        

  for (let i = 0; i < n; i++) {
    graph.set(i, []);
  }

  dependencies.forEach(dependency => {
    const [ course, prereq ] = dependency;
    graph.get(course).push(prereq);
  });

  return graph;
}
```

<br>

##### `Solution 2 - Kahn's Algorithm`

<img src="https://i.imgur.com/7BALkSL.png" alt="Kahn's Algorithm" width="800">
<br><br>

```js
// graph = { 1 => {}, 2 => { 3 }, 3 => {}, 4 => {} }
// deps = { 1 => [ 2, 3 ], 2 => [], 3 => [ 2 ], 4 => [ 2, 3 ] }

// O(v+e) time | O(v+e) space
function findOrder(numCourses, prereqs) {
  const { graph, deps } = buildGraph(numCourses, prereqs);
  const noReqs = getNoPrereqs(graph);               // []
  const order = [];                                 // [4, 1, 3]

  while (noReqs.length > 0) {
    const current = noReqs.pop();                   // 3
    order.push(current);                            // [2]

    // remove current job from every job that depends on it
    deps.get(current).forEach(dependency => {       // O(e) time
      graph.get(dependency).delete(current);

      if (graph.get(dependency).size === 0) {
        noReqs.push(dependency);
      }
    });
  }

  return order.length < numCourses ? [] : order;
}

function getNoPrereqs(graph) {
  const noReqs = [];

  graph.forEach((prereqs, job) => {
    if (prereqs.size === 0) {
      noReqs.push(job);
    }
  });

  return noReqs;
}

function buildGraph(numCourses, dependencies) {
  const graph = new Map();                          // {1: [], 2: [], 3: [], 4: []}
  const deps = new Map();

  for (let i = 0; i < numCourses; i++) {
    graph.set(i, new Set());
    deps.set(i, []);
  }

  dependencies.forEach(dependency => {
    const [ job, prereq ] = dependency;
    graph.get(job).add(prereq);
    deps.get(prereq).push(job);
  });

  return { graph, deps };
}
```