'use strict';

const { Vertex, Edge, Graph } = require('../depthFirst/depth-first.js');
// define vertice values

const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const E = new Vertex('E');
const F = new Vertex('F');
const G = new Vertex('G');
const H = new Vertex('H');

const graph = new Graph();
graph.addVertex(A);
graph.addVertex(B);
graph.addVertex(C);
graph.addVertex(G);
graph.addVertex(D);
graph.addVertex(E);
graph.addVertex(H);
graph.addVertex(F);

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(D, E);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(D, F);

console.log(graph);

describe('Vertex, Edge, and Graph tests', () => {

  it('will create instances of a Vertex', () => {

    const actual = new Vertex(10);
    expect(actual).toBeDefined();

  });

  it('will create instances of a Vertex', () => {

    const newVertex = new Vertex(10);
    const actual = new Edge(newVertex, 1);
    expect(actual).toBeDefined();

  });

  it('will create instances of a Vertex', () => {

    const actual = new Graph();
    expect(actual).toBeDefined();

  });

});

describe('addVertex() tests', () => {

  it('will add a new Vertex to the Graph', () => {

    const addGraph = new Graph();
    addGraph.addVertex(A);
    const actual = addGraph._adjacencyList.has(A);

    expect(actual).toBeTruthy();

  });

  it('will return an error if no Vertex is passed in', () => {

    const addGraph = new Graph();
    const actual = addGraph.addVertex();
    const expected = 'Vertex Required';

    expect(actual).toBe(expected);

  });

});

describe('addDirectedEdge() tests', () => {

  it('will return an error if Vertice are not passed in', () => {
    const addGraph = new Graph();
    const actual = addGraph.addDirectedEdge();
    const expected = 'Beginning AND ending vertice required';

    expect(actual).toBe(expected);

  });

  it('will return an error if one of the vertices are not present in the graph', () => {
    const addGraph = new Graph();
    addGraph.addVertex(A);
    addGraph.addVertex(C);

    const actualStart = addGraph.addDirectedEdge(A, B);
    const expectedStart = 'ending vertex not in the graph';
    const actualEnd = addGraph.addDirectedEdge(B, A);
    const expectedEnd = 'begining vertex not in the graph';

    expect(actualStart).toBe(expectedStart);
    expect(actualEnd).toBe(expectedEnd);

  });

  it('will create a directed edge between two vertice', () => {
    const addGraph = new Graph();
    addGraph.addVertex(A);
    addGraph.addVertex(C);
    addGraph.addVertex(E);

    addGraph.addDirectedEdge(A, E);
    addGraph.addDirectedEdge(A, C);

    const found = addGraph._adjacencyList.get(A).find((vert, idx) => vert.vertex.value === C.value);

    const actual = found.vertex.value;
    const expected = C.value;

    expect(actual).toEqual(expected);

  });

});

describe('addUnDirectedEdge() tests', () => {

  it('will return an error if Vertice are not passed in', () => {
    const addGraph = new Graph();
    const actual = addGraph.addUnDirectedEdge();
    const expected = 'Beginning AND ending vertice required';

    expect(actual).toBe(expected);

  });

  it('will return an error if one of the vertices are not present in the graph', () => {
    const addGraph = new Graph();
    addGraph.addVertex(A);
    addGraph.addVertex(C);

    const actualStart = addGraph.addUnDirectedEdge(A, B);
    const expectedStart = 'ending vertex not in the graph';
    const actualEnd = addGraph.addUnDirectedEdge(B, A);
    const expectedEnd = 'begining vertex not in the graph';

    expect(actualStart).toBe(expectedStart);
    expect(actualEnd).toBe(expectedEnd);

  });

  it('will create an undirected edge between two vertice', () => {
    const addGraph = new Graph();
    addGraph.addVertex(A);
    addGraph.addVertex(C);
    addGraph.addVertex(E);

    addGraph.addUnDirectedEdge(A, E, 100);
    addGraph.addUnDirectedEdge(E, C, 85);

    const found = addGraph._adjacencyList.get(A).find((vert, idx) => vert.vertex.value === E.value);

    const actual = found.vertex.value;
    const expected = E.value;
    const actualWeight = found.weight;
    const expectedWeight = 100;

    expect(actual).toEqual(expected);
    expect(actualWeight).toEqual(expectedWeight);

  });

});

describe('getNodes() tests', () => {

  it('will return EMPTY if no contents in graph', () => {

    const emptyGraph = new Graph();

    const actual = emptyGraph.getNodes();
    const expected = 'Empty Graph';

    expect(actual).toBe(expected);

  });

  it('will return the nodes in the graph', () => {

    const actual = graph.getNodes();
    const expected = [A, B, C, G, D, E, H, F];

    expect(actual).toEqual(expected);

  });

});

describe('getNeighbors() tests', () => {

  it('will return Vertex Required if no vertex passed', () => {

    const neighbors = new Graph();
    neighbors.addVertex(A);
    neighbors.addVertex(C);
    neighbors.addVertex(E);

    const actual = neighbors.getNeighbors();
    const expected = 'Vertex Required';

    expect(actual).toEqual(expected);

  });

  it('will return a list of connected nodes to the provided passed', () => {

    const neighbors = new Graph();
    neighbors.addVertex(A);
    neighbors.addVertex(C);
    neighbors.addVertex(E);
    neighbors.addDirectedEdge(A, E);
    neighbors.addDirectedEdge(A, C);

    const actual = neighbors.getNeighbors(A);
    const expected = [[E, 1], [C, 1]];

    expect(actual).toEqual(expected);

  });

});

describe('getSize() tests', () => {

  it('will return the size of the graph', () => {

    const sizeGraph = new Graph();
    sizeGraph.addVertex(A);
    sizeGraph.addVertex(C);
    sizeGraph.addVertex(E);

    const actual = sizeGraph.getSize();
    const expected = 3;

    expect(actual).toEqual(expected);

  });

});

describe('breadthFirst() tests', () => {

  it('will return Vertex Required if no vertex passed', () => {
    const neighbors = new Graph();
    neighbors.addVertex(A);
    neighbors.addVertex(C);
    neighbors.addVertex(E);

    const actual = neighbors.breadthFirst();
    const expected = 'Vertex Required';

    expect(actual).toEqual(expected);

  });

  it('will return Graph Empty if ther are no Vertex', () => {

    const emptyGraph = new Graph();

    const actual = emptyGraph.breadthFirst(A);
    const expected = 'Empty Graph';

    expect(actual).toBe(expected);

  });

  it('will return the vertice of the graph', () => {
    const actual = graph.breadthFirst(A);
    const expectedBFS = new Set();
    console.log(actual);
    expectedBFS.add(A).add(B).add(D).add(C).add(E).add(F).add(H).add(G);

    expect(actual).toEqual(expectedBFS);

  });

});

describe('depthFirst() tests', () => {

  it('will return Vertex Required if no vertex passed', () => {
    const neighbors = new Graph();
    neighbors.addVertex(A);
    neighbors.addVertex(C);
    neighbors.addVertex(E);

    const actual = neighbors.depthFirst();
    const expected = 'Vertex Required';

    expect(actual).toEqual(expected);

  });

  it('will return Graph Empty if ther are no Vertex', () => {

    const emptyGraph = new Graph();

    const actual = emptyGraph.depthFirst(A);
    const expected = 'Empty Graph';

    expect(actual).toBe(expected);

  });

  it('will return the vertice of the graph', () => {
    const actual = graph.depthFirst(A);
    const expectedDFS = new Set();
    console.log(actual);
    expectedDFS.add(A).add(B).add(C).add(G).add(D).add(E).add(H).add(F);
    console.log(expectedDFS);

    expect(actual).toBe(expectedDFS);

  });

});