# CODE: Find Maximum Value
Added to the existing Binary Tree class on 11.07.2018

## Summary
PD: Add a method to our existing Binary Tree class that will receive a tree and allow us to traverse and locate the maximum value in that tree.  We should return the maximum value.

## Challenge
I will create a modified version of the preOrder traversal method that will find the max value.

## Big O
* Time - O(n) because we don't know how many nodes are in the tree.
* Space - O(1) because the resources do not grow after they are created.

## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/find-maximum-value-binary-tree.jpg)

## findMaximumValue(arity 1) method
* Receives a tree to search.
* Traverse the tree using preOrder methodology.
* Compares the value of the each node with the maxValue and changes maxValue if necessary.

## Tests
All tests pass 100% with 94.69% coverage.
* Test for empty tree
* Test for popper value returned
* Test for max value when there are string values in the tree

# CODE: Breadth-First Traversal
Added to the existing Binary Tree class on 11.06.2018

## Summary
PD: Add a method to our existing Binary Tree class that will allow us to traverse the tree using the breadth-first methodology.  We should return the contents of each node in the order the nodes are traversed.

## Challenge
I will be incorporating my previously created Queue class to assist with the process.

## Big O
Time - O(n) because we don't know how many nodes are in the tree.

Space - O(n) because we will be creating a queue and an array to hold the nth values

## Solution
![whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/breadth-first-traversal.jpg)

## breadthFirst(arity 0/1) method
* Receives an optional starting node in the tree. If no node is passed into the method, it will start with the root node.
* Traverses the tree starting at the top and traveling LEFT -> RIGHT across each level until all nodes have been traversed.
* Stores the value of each traversed node in an array
* Returns the array as a string.

## Tests
All tests pass 100% with 95.38% coverage.
* Test for an empty tree
* Test for the proper node order to be returned
* Test for the proper node order to be returned when passing in a "sub-tree" to the method.


# CODE: Trees

## Summary
Problem Domain: A solution is needed to create a Binary Tree Class, Binary Search Tree Class, and a Node class that works with the tree classes.  Methods to traverse the Binary Tree using "pre," "in," and "post" order processes should be created.  In addition a method to add to and find a value to the Binary Search Tree should also be created.

## Challenge
End users should not be aware of any errors or overflows.

## BIG O
* Binary Tree methods will all be O(n) for time
* Binary Search Tree methods:
  - add(): Time = O(n) : Space = O(n)
  - search(): Time = O(log n) = Space = O(1);

## Solution
![whiteboard] N/A


## Binary Tree Methods

### preOrder(arity 1)
* Receives a node to start the traversal at.
* traverses the tree beginning with ROOT -> LEFT -> RIGHT
* Returns an array of the traversed values

### inOrder(arity 1)
* Receives a node to start the traversal at.
* traverses the tree beginning with LEFT -> ROOT -> RIGHT
* Returns an array of the traversed values

### postOrder(arity 1)
* Receives a node to start the traversal at.
* traverses the tree beginning with LEFT -> RIGHT -> ROOT 
* Returns an array of the traversed values

### Binary Tree Testing
Tests pass 100% with 98.61%

####The following tests were performed:
* Create a new instance of node.
* Create a new instance of a Binary Tree
* Return values when traversing from the root for each method
* Return values when traversing from a child node in the tree for each method.
* Verify proper error handling when the tree is empty

## Binary SEARCH Tree (BST) Methods

### add(arity 1)
* Receives a value to add to the BST.
* Traverses the tree following the rules of less than/greater than the value of the node until the end point is found.
* Add the value at the endpoint.

### search(arity 1) - 
* Receives a value to search for in the tree.
* Traverses the tree using value comparisons to direct the search left or right.
* Returns the node with the correct value.

### Binary SEARCH Tree Testing
Tests pass 100% with 98.61%

Binary Search Tree method to add passes with 100%.
Binary Search Tree method to search is still in progress and noter working.


####The following tests were performed:
* Create a new instance of a Binary Search Tree
* Proper error handling when the tree is empty, when a value is not passed, or the value is not found.
* Return the correct number from the left and right side of the tree.




