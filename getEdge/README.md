# Get Edges

## Summary
Write a function that accepts a graph and an array of cities and returns weather the full trip is possible with direct flights, and how much it would cost.

## Challenge
A method, `addUnDirectedEdge(Arity 3)`, had to be added to the graph class. It takes in a starting and ending vertex, and the weight between the two.  It returns an updated graph with the two vertice connected. It was added to and tested in the breadth-first module.

## Big-O Notation
* Time -> O(n);
* Space -> O(1);

## Function
### `findCost(arity 2)`
* Used to find direct connections between cities.
* Receives a graph and an array of cities.
* Returns a boolean and the cost of the edges (e.g., True, $82 or False, $0).

## Testing
* **Tests passed with 100% coverage:**
* Tested that all arguments were received and were valid.  Return a user friendly error if not.
* Tested for false cases that included city not in graph, and no direct flights for two or more cities.
* Tested for true cases that included two or more cities.

![Whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/get-edges.jpg)