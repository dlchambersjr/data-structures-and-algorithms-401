# Graph

## Summary
This is a graph class that includes classes for vertices and edges.  The graph class also includes methods to manipulate the graph.

## Challenge
See above

## Classes
### `Vertex(arity 1)`
Receives a value to be stored in the Vertex(node) of the graph.
### `Edge(arity 2)`
Receives a vertex to connect to and the weight of the edge between the two vertices.  weight defaults to 1 if not provided.
### `Graph()`
Creates an adjacencyList map to store the vertices included in the graph.

## Methods

### hash(arity 1)
* Used to create an index position
* Receives a key to hash
* Returns a hashed value to use as an index position.

### add(arity 2)
* Used to add key/value pair into the hash map.
* It will receive a key and value to be added.

### Find(arity 1)
* Used to find a particular value in hash table.
* It will receive a key to be searched for.
* it will return the value from the key value pair.

### contains(arity 1)
* Used to check if the key is contained in the hash table.
* Receives a key to check.
* Returns a boolean result.

### getHash(arity 1)
* Used to get the index value of a particular key.
* Receives a key to check.
* Returns the hashed index position.

### serialize(arity 0)
* Used to convert a hash table into serialized JSON data.
* Returns the serialized data.

### deserialize(arity 1)
* Used to populate a hash map with serialized JSON data.
* Receives a valid JSON string.
* Returns the newly populated hash table.

## Testing
Tests passed with 100% coverage:
* Tested the creation of a new hash map class.
* Tested that all methods caught errors and returned conversational results.
* Tested that all methods received proper input.
* Tested ability to add a value to a hash table.
* Tested ability to find a key and return the value.
* Tested ability to see if a key was contained in the hash table.
* Tested ability to return the hashed index of a key.
* Tested the ability to return a serialized hashed table
* Tested the ability to populate a hash table with a serialized JSON data.



