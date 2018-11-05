# CODE: Fizz-Buzz Tree

## Summary
Problem Domain: A function is needed that takes in a tree and traverses the nodes to determine if their values are divisible by 3 / 5 / both 3 & 5. If divisible, the value of the node will be changed to fizz, buzz, or fizzBuzz respectively.  It is assumed that our existing node and binary tree classes are available to us to modify.

## Challenge
End users should not be aware of any errors or overflows.

## BIG O
* - fizzBuzzTree(): Time = O(n) : Space = O(1)
  
## Solution
![whiteboard] (https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/fizz-buzz-tree.jpg)


## Method

### fizzBuzzTree(arity 1)
* Receives a tree to start the traversal at.
* traverses the tree beginning with ROOT -> LEFT -> RIGHT
* calculates if value is divisible by 3/5/both
* modifies the value accordingly.
* Returns the modified tree.

### Testing
* PASSING: XXX% 
* COVERAGE: XXX% coverage

#### The following tests were performed:
* Create a new instance of node.
* Create a new instance of a Binary Tree
* Return modified tree after calling fizzBuzzTree().
* Return modified "sub-tree" when traversing from a child node in the tree.
* Verify proper error handling when the tree is empty.


