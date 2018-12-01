'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 1) {
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

    const beginVertex = this._adjacencyList.get(startVertex);

    beginVertex.push(new Edge(endVertex, weight));

    return this;

  }//end addDirectedEdge

  getNodes() {
    if (this._adjacencyList.size === 0) return 'Empty Graph';

    const allNodes = [];
    const mapGraph = this._adjacencyList.entries();

    for (let [key] of mapGraph) { allNodes.push(key); }

    return allNodes;

  } //End of getNodes();

  getNeighbors(vertex) {
    if (!vertex) return 'Vertex Required';

    const connectedNodes = [];
    const nodes = this._adjacencyList.get(vertex).entries();

    for (let [key, value] of nodes) {
      connectedNodes.push(value.vertex);
    }

    return connectedNodes;

  }//endGetNeighbors

  getSize() {

    return this._adjacencyList.size;

  }// end get size

} // end Graph class

module.exports = { Vertex, Edge, Graph };