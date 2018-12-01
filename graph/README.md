# Graph

## Summary
This is a graph class that includes classes for vertices and edges.  The graph class also includes methods to manipulate the graph.

## Challenge
See above

## Classes
### `Vertex(arity 1)`
Receives a value to be stored in a Vertex(node).

### `Edge(arity 2)`
Receives a vertex to connect to and the weight of the edge between the two vertices.  weight defaults to 1 if not provided.

### `Graph()`
Creates an adjacencyList map to store the vertices included in the graph.

## Methods

### `addVertex(arity 1)`
* Used to add a vertex into the graph
* Receives a vertex to add
* Returns the graph with the newly added vertex.

### `addDirectedEdge(arity 3)`
* Used to create an edge between two vertex in the graph.
* Receives the starting and ending vertex along with the weight of the edge.

### `getNodes()`
* Used to identify all of the vertex's in the graph.
* Returns an array of all of the vertices.

### `getNeighbors(arity 1)`
* Used to identify all of the connected vertice to a specific vertex.
* Receives a vertex to use as the vertex to check
* Returns an array of vertice and their weight connected to the given vertex.

### `getSize()`
* Used to determine how many vertice are in the graph.
* Returns number of vertices.

## Testing
**Tests passed with 100% coverage:**
* Tested the creation of a new Vertex, Edge, and Graph classes.
* Tested that all methods caught errors and returned conversational results.
* Tested that all methods received proper input.
* Tested ability to add a vertex to the graph.
* Tested ability to make a directed edge between two vertice.
* Tested ability to see all of the vertices included in the graph
* Tested ability to see the vertices with a direct edge to a specific vertex.
* Tested the ability identify the number of vertice in the graph.