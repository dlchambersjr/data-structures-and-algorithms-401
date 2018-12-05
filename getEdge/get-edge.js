const findCost = (graph, cities) => {
  if (!graph || graph._adjacencyList.size === 0) {
    return 'A Graph with Data is required';
  }

  if (!cities || cities.length < 2) {
    return 'At least two cities are required';
  }

  let cost = 0;
  let flights = graph._adjacencyList;

  for (let i = 0; i < cities.length - 1; i++) {
    if (!flights.has(cities[i])) {
      return `FALSE, $0`;
    }

    let connections = graph.getNeighbors(cities[i]);

    let found = connections.find(city => {
      if (i + 1 < cities.length) {
        return city[0] === cities[i + 1];
      }
    });

    if (found) {
      cost += found[1];
    } else { return `FALSE, $0`; }
  }
  return `True, $${cost}`;
};

module.exports = findCost;