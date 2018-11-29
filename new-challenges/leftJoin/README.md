# Left Join - David Chambers/Sara Bahrini

## Summary
Problem Domain: Create a function that receives two hashmaps and returns a data structure that combines the shared keys and values. It is assumed there is access to a HashTable class that contains a serialize method.

## Challenge
The biggest challenge is we don't know what keys are in the hashmap and will have to serialize to work with the individual objects.

## functions/methods
### `leftJoin(arity 2)`
* Used to LEFT JOIN two hashmaps
* Receives two hashmaps to join
* Returns an array of objects -> `[ {key: [valueA, valueB/(null)]}, ...]`

## Testing
Tests passed with 100% coverage:
* Tested that two hashmaps are passed to the function.
* Tested that the hashmaps passed to the function are not empty.
* Tested that the hasmaps combine correctly.

![Whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/join-left.jpg)



