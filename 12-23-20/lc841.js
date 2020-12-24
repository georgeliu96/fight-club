// Whiteboard
// https://awwapp.com/b/uqangiftcse3w/


const canVisitAllRooms = (rooms) => {
    const stack = [0];
    const visited = new Set([0]);
    while (stack.length > 0) {
      const current = stack.pop();
      const neighbors = rooms[current];
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          stack.push(neighbor);
        }
      }
    }
    return visited.size === rooms.length;
  };
  
  // console.log(canVisitAllRooms([[1],[2],[3],[]])); // true
  // console.log(canVisitAllRooms([[1,3],[3,0,1],[2],[0]])); // false
  // console.log(canVisitAllRooms([[1], [0]])); // true
  
  // console.log(canVisitAllRooms([[1,1,1,1,1,1,1,1,1,1,1], [0]])); // true
  
  // n = # rooms 
  // m = max # keys in any room
  
  // O(n*m)
  
  // Arrays
  //  push O(1)
  //  pop O(1)
  //
  //  unshift O(n)
  //  shift O(n)
  //  includes O(n)
  
  // Set
  //  add O(1)
  //  has O(1)
  
  
  // const start = Date.now();
  // const arr = [];
  // for (let i = 0; i < 100000; i += 1) { // O(n^2)
  //   arr.unshift(i);
  // }
  // const end = Date.now();
  // console.log(`finished in ${end - start}ms`);
  
  
  
  // Write a fn that takes in a graph
  // and returns a bool indicating if there is a directed cycle
  
  // white-grey-black
  const hasCycle = (graph) => {
    const visiting = new Set();
    const visited = new Set();
  
    const _hasCycle = (node) => {
      if (visiting.has(node)) {
        return true;
      }
      if (visited.has(node)) { // important
        return false;
      }
  
      visiting.add(node);
  
      for (let neighbor of graph[node]) {
        if (_hasCycle(neighbor) === true) {
          return true;
        }
      }
      visiting.delete(node);
      visited.add(node);
      return false;
    };
  
    for (let node of Object.keys(graph)) {
      if (_hasCycle(node) === true) {
        return true;
      }
    }
    return false;
  };
  // a->b->c->d->e
  
  const g1 = {
    a: ['b', 'c'],
    b: ['d'],
    c: [],
    d: [],
  };
  
  console.log(hasCycle(g1)); // false
  
  const g2 = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['d'],
    d: ['a'],
  };
  
  console.log(hasCycle(g2)); // true