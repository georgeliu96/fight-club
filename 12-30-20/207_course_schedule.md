# <a href="https://leetcode.com/problems/course-schedule/" target="_blank">207. Course Schedule [Medium]</a>

```
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as
a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.

Example 3:
Input: numCourses = 3, prerequisies = [[1, 0]]
Output: true


Constraints:
- The input prerequisites is a graph represented by a list of edges, not adjacency matrices.
- Read more about how a graph is represented.
- You may assume that there are no duplicate edges in the input prerequisites.
- 1 <= numCourses <= 10^5
```

<br>

* Create an adjacency list
* If a cycle is detected, it is impossible to finish course
* Brute force approach:
  * Loop through each vertex (course) in graph
  * If the vertex has no prereq, add to `completed` set
  * If the vertex has prereqs
    * If all of its prereqs has been completed and course is not taken
    * Take course
  * Note we may encounter a course with prereq before the "base" course
    * Create a variable `isEligible` to keep checking all courses
    * While they are eligible
    * If a course has been added to completed, mark as `isEligible`
    * This also prevents cycles
* Linear time solution
  * Topological DFS
  * Before we can complete course, visit and complete all of its prereqs

<br>

##### `Solution 1 - Linear Time - Topological + DFS`

```js
// v = number of courses (vertices)
// e = number of prereqs (edges)

// O(v + e) time | O(v + e) space
function canFinish(numCourses, prereqs) {
  const graph = buildGraph(numCourses, prereqs);
  const visited = new Set();
  const visiting = new Set();

  for (const [ course, prereqs ] of graph.entries()) {
    if (!visited.has(course)) {
      const hasCycle = dfs(graph, course, visited, visiting);

      if (hasCycle) {
        return false;
      }  
    }
  }

  return true;
}

// return true if graph contains cycle
function dfs(graph, node, visited, visiting) {
  if (visited.has(node)) {
    return false;
  } else if (visiting.has(node)) {
    return true;
  }

  visiting.add(node);

  const prereqs = graph.get(node);

  for (let i = 0; i < prereqs.length; i++) {
    if (!visited.has(prereqs[i])) {     // don't add to stack if already visited
      const hasCycle = dfs(graph, prereqs[i], visited, visiting);

      if (hasCycle) {
        return true;
      }  
    }
  }

  visited.add(node);
  visiting.delete(node);
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

##### `Solution 2 - Linear Time - Dependency Stack`

```js
// graph = { 1 => {}, 2 => { 3 }, 3 => {}, 4 => {} }
// deps = { 1 => [ 2, 3 ], 2 => [], 3 => [ 2 ], 4 => [ 2, 3 ] }
function canFinish(numCourses, prereqs) {
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

    deps.delete(current);
  }

  return order.length < numCourses ? false : true;
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

<br>

##### `Solution 3 - O(n^3) Time - Topological + Non-DFS`

```js
// it is not possible to complete a course if it contains cycle
// n = numCourses, prereqs are bounded by n
// O(n^3) time | O(n) space
function canFinish(numCourses, prereqs) {
  const graph = buildGraph(numCourses, prereqs);   
  const completed = new Set();          
  let isEligible = true;

  while (isEligible) {                  // a course can show up before we complete its prereq
    isEligible = false;                 // toggled if at least 1 course can be completed

    graph.forEach((prereqs, course) => {   
      const hasMetAllPrereq = prereqs.every(prereq => completed.has(prereq));

      if (hasMetAllPrereq) {
        completed.add(course);
        graph.delete(course);           // remove completed course to prevent double visiting
        isEligible = true;
      }
    });
  }

  return completed.size === numCourses;
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

* Topological Sort
* Can only visit a node once all its parents are visited
* Given a graph, visit the nodes in an order where all parents are visited before their children
* Only non cyclic graphs can be top-sorted

<br>

```
child -> parent

E -> F
A -> B -> C -> D

Top / DFS:  E, F, A, B, C, D
Top / Non-DFS: E, A, F, B, C, D
```
