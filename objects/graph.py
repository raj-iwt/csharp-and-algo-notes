class Graph:
    def __init__(self):
        self.vertices = {}
    
    def add_vertex(self, vertex):
        if vertex not in self.vertices:
            self.vertices[vertex] = []
    
    def add_edge(self, vertex1, vertex2):
        if vertex1 in self.vertices and vertex2 in self.vertices:
            self.vertices[vertex1].append(vertex2)
            self.vertices[vertex2].append(vertex1)

    def dfs(self, start):
        visited = []
        self._dfs_recursive(start, visited)
        return visited

    def _dfs_recursive(self, vertex, visited):
        visited.append(vertex)
        for neighbor in self.vertices[vertex]:
            if neighbor not in visited:
                self._dfs_recursive(neighbor, visited)









graph = Graph()
graph.add_vertex(1)
graph.add_vertex(2)
graph.add_vertex(3)
graph.add_edge(1, 2)
graph.add_edge(1, 3)
print(graph.dfs(1))