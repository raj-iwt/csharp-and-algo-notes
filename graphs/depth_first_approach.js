class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Vertex also called node
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("C", "D");
graph.addEdge("B", "D");

function dfs_recurse(graph, start) {
  let iterated = {};
  let items = [];
  if (graph.adjacencyList) {
    dfs(start);
  }

  function dfs(start) {
    if (graph.adjacencyList[start] && !iterated[start]) {
      iterated[start] = start;
      items.push(start);
      for (let item of graph.adjacencyList[start]) {
        dfs(item);
      }
    }
  }

  return items;
}

console.log(dfs_recurse(graph, "A"));
