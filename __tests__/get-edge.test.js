const { Vertex, Graph } = require('../breadthFirst/breadth-first.js');

const findCost = require('../getEdge/get-edge.js');

const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const metroville = new Vertex('Metroville');
const monstropolis = new Vertex('Monstropolis');
const narnia = new Vertex('Narnia');
const naboo = new Vertex('Naboo');

const graph = new Graph();
graph.addVertex(pandora);
graph.addVertex(arendelle);
graph.addVertex(metroville);
graph.addVertex(monstropolis);
graph.addVertex(narnia);
graph.addVertex(naboo);

graph.addUnDirectedEdge(pandora, arendelle, 150);
graph.addUnDirectedEdge(pandora, metroville, 82);
graph.addUnDirectedEdge(arendelle, metroville, 99);
graph.addUnDirectedEdge(arendelle, monstropolis, 42);
graph.addUnDirectedEdge(metroville, monstropolis, 105);
graph.addUnDirectedEdge(metroville, naboo, 26);
graph.addUnDirectedEdge(narnia, naboo, 250);
graph.addUnDirectedEdge(narnia, metroville, 37);
graph.addUnDirectedEdge(naboo, monstropolis, 73);

describe('findCost() tests', () => {

  it('will return user friendly error when no graph is passed or empty graph', () => {

    const emptyGraph = new Graph();
    const cities = [pandora, arendelle];

    const actualNoGraph = findCost(null, cities);
    const actualEmpty = findCost(emptyGraph, cities);

    const expected = 'A Graph with Data is required';

    expect(actualNoGraph).toBe(expected);
    expect(actualEmpty).toBe(expected);

  });

  it('will return user friendly error when less than two citites are passed', () => {

    const oneCity = [pandora];
    const noCities = [];

    const actualOneCity = findCost(graph, oneCity);
    const actualNoCities = findCost(graph, noCities);

    const expected = 'At least two cities are required';

    expect(actualOneCity).toBe(expected);
    expect(actualNoCities).toBe(expected);

  });

  it('will return FALSE - $0  when a city is not in the graph', () => {

    const wrongCity = new Vertex('Tatooine');
    const wrongOne = [wrongCity, pandora];
    const wrongTwo = [naboo, wrongCity, pandora];

    const actualOne = findCost(graph, wrongOne);
    const actualTwo = findCost(graph, wrongTwo);
    const expected = 'FALSE, $0';

    expect(actualOne).toBe(expected);
    expect(actualTwo).toBe(expected);

  });

  it('will return FALSE - $0  when a direct route is not possible', () => {

    const wrongOne = [naboo, pandora];
    const wrongTwo = [narnia, arendelle, naboo];

    const actualOne = findCost(graph, wrongOne);
    const actualTwo = findCost(graph, wrongTwo);
    const expected = 'FALSE, $0';

    expect(actualOne).toBe(expected);
    expect(actualTwo).toBe(expected);

  });

  it('will return true WITH $$ when direct routes are available for TWO cities.', () => {

    const cities = [metroville, pandora];

    const actual = findCost(graph, cities);
    const expected = 'True, $82';

    expect(actual).toBe(expected);

  });

  it('will return true WITH $$ when direct routes are available for MORE THAN TWO cities.', () => {

    const cities = [arendelle, monstropolis, naboo];

    const actual = findCost(graph, cities);
    const expected = 'True, $115';

    expect(actual).toBe(expected);

  });


});