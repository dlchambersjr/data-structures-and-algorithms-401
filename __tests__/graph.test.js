'use strict';

const { Vertex, Edge, Graph } = require('../graph/graph.js');

// define vertice values

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);

const graph = new Graph();
graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);

graph.addDirectedEdge(ten, two);
graph.addDirectedEdge(ten, six);
graph.addDirectedEdge(ten, three);
graph.addDirectedEdge(two, seven);
graph.addDirectedEdge(six, seven);
graph.addDirectedEdge(six, eight);
graph.addDirectedEdge(three, eight);
graph.addDirectedEdge(eight, seven);

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
    addGraph.addVertex(ten);
    const actual = addGraph._adjacencyList.has(ten);

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
    addGraph.addVertex(ten);
    addGraph.addVertex(six);

    const actualStart = addGraph.addDirectedEdge(ten, two);
    const expectedStart = 'ending vertex not in the graph';
    const actualEnd = addGraph.addDirectedEdge(two, ten);
    const expectedEnd = 'begining vertex not in the graph';

    expect(actualStart).toBe(expectedStart);
    expect(actualEnd).toBe(expectedEnd);

  });

  it('will create a directed edge between two vertice', () => {
    const addGraph = new Graph();
    addGraph.addVertex(ten);
    addGraph.addVertex(six);
    addGraph.addVertex(three);

    addGraph.addDirectedEdge(ten, three);
    addGraph.addDirectedEdge(ten, six);

    const found = addGraph._adjacencyList.get(ten).find((vert, idx) => vert.vertex.value === six.value);

    const actual = found.vertex.value;
    const expected = six.value;

    expect(actual).toEqual(expected);

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
    const expected = [ten, two, six, seven, three, eight];

    expect(actual).toEqual(expected);

  });

});

describe('getNeighbors() tests', () => {

  it('will return Vertex Required if no vertex passed', () => {

    const neighbors = new Graph();
    neighbors.addVertex(ten);
    neighbors.addVertex(six);
    neighbors.addVertex(three);

    const actual = neighbors.getNeighbors();
    const expected = 'Vertex Required';

    expect(actual).toEqual(expected);

  });

  it('will return a list of connected nodes to the provided passed', () => {

    const neighbors = new Graph();
    neighbors.addVertex(ten);
    neighbors.addVertex(six);
    neighbors.addVertex(three);
    neighbors.addDirectedEdge(ten, three);
    neighbors.addDirectedEdge(ten, six);

    const actual = neighbors.getNeighbors(ten);
    const expected = [three, six];

    expect(actual).toEqual(expected);

  });

});

describe('getSize() tests', () => {

  it('will return the size of the graph', () => {

    const sizeGraph = new Graph();
    sizeGraph.addVertex(ten);
    sizeGraph.addVertex(six);
    sizeGraph.addVertex(three);

    const actual = sizeGraph.getSize();
    const expected = 3;

    expect(actual).toEqual(expected);

  });

});