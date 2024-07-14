const undirected_graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["C", "B"],
};
console.log(undirected_graph);

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

console.log(graph.adjacencyList);
