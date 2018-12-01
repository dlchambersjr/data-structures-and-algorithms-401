'use strict';

const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {

    if (!vertex) return 'Vertex Required';
    return this._adjacencyList.set(vertex, []);

  } //end addVertex

  addDirectedEdge(startVertex, endVertex, weight = 1) {
    if (!startVertex || !endVertex) return 'Beginning AND ending vertice required';

    if (!this._adjacencyList.has(startVertex)) return 'begining vertex not in the graph';

    if (!this._adjacencyList.has(endVertex)) return 'ending vertex not in the graph';

    const sourceVertex = this._adjacencyList.get(startVertex);

    sourceVertex.push(new Edge(endVertex, weight));

    return this;



  }//end addDirectedEdge

  getNodes() {

  } //End of getNodes();

  getNeighbors(vertex) {
    if (!vertex) return 'Vertex Required';

    return [...this._adjacencyList.get(vertex)]

  }//endGetNeighbors

  getSize() {

    return this._adjacencyList.size;

  }// end get size

  breadthFirstSearch(startnode) { }// end BFS

  depthFirstSearch(startNode) { } //end DFS

} // end Graph class

module.exports = { Vertex, Edge, Graph };