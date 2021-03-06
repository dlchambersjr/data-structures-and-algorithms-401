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

  addUnDirectedEdge(startVertex, endVertex, weight = 1) {
    if (!startVertex || !endVertex) return 'Beginning AND ending vertice required';

    if (!this._adjacencyList.has(startVertex)) return 'begining vertex not in the graph';

    if (!this._adjacencyList.has(endVertex)) return 'ending vertex not in the graph';

    const beginVertex = this._adjacencyList.get(startVertex);

    beginVertex.push(new Edge(endVertex, weight));

    console.log(beginVertex);

    const stopVertex = this._adjacencyList.get(endVertex);

    stopVertex.push(new Edge(startVertex, weight));

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
      connectedNodes.push([value.vertex, value.weight]);
    }

    return connectedNodes;

  }//endGetNeighbors

  getSize() {

    return this._adjacencyList.size;

  }// end get size

  breadthFirst(startVertex) {

    if (!startVertex) { return 'Vertex Required'; }

    if (this._adjacencyList.size === 0) return 'Empty Graph';

    const trackingQueue = [];
    const seenVertex = new Set();

    trackingQueue.push(startVertex);
    seenVertex.add(startVertex);

    while (trackingQueue.length) {
      let currentVertex = trackingQueue.shift();

      let connected = this.getNeighbors(currentVertex);

      for (let [key, value] of connected) {
        const neighborVertex = key;

        if (seenVertex.has(neighborVertex)) {
          continue;
        } else {
          seenVertex.add(neighborVertex);
        }

        trackingQueue.push(neighborVertex);
      }
    }
    return seenVertex;
  } //End BreadthFirst Search

  depthFirst(startVertex) {

    if (!startVertex) { return 'Vertex Required'; }
    if (this._adjacencyList.size === 0) return 'Empty Graph';

    const trackingList = [startVertex];
    const result = [];
    const visited = {};
    let currentVertex;
    let neighborVertex;

    visited[startVertex.value] = true;

    while (trackingList.length) {
      currentVertex = trackingList.pop();
      result.push(currentVertex);
      let connected = this.getNeighbors(currentVertex);
      for (let [key, value] of connected) {
        neighborVertex = key;

        if (!visited[neighborVertex.value]) {
          visited[neighborVertex.value] = true;
          trackingList.push(neighborVertex);
        }
      }
    }
    return result;

  } //End depthFirst Search

} // end Graph class

module.exports = { Vertex, Edge, Graph };