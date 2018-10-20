NOTE: This README.md is in reverse chronological order to place the most recent assignments to be graded at the top.  I thought this would be help since we have 10 weeks of material to submit.  

# Lab-05 Linked lists (SINGLY LINKED LIST)

## Summary
Problem Domain:  A solution is needed that will create a class called ```LinkedList```.  This class will accept nodes and maintain a ```head``` property to point to the first node in the list.  Three methods will be attached to ```LinkedList```, (```insert```, ```includes```, and ```print```), to manipulate the list.  There will also be a ```Node``` class that will create instances of ```Node``` to be added to the linked list.

## Challenge


## Methods

### insert(arity 1)
* Used to insert a node into the first position of the list.
* It will receive a value to be used when the node is created.
* It will move the HEAD pointer to redirect to the new node.

### includes(arity 1)
* Used to find a particular value in the list.
* It will receive a value to be searched for.
* it will a boolean response for if the value exists or not.

### print(arity 0)
* Used to display the values of all nodes in the list.
* Does not receive any values

## Testing
The following tests should be performed:
### Verify the classes work
* Can I create an empty LinkedList
* Can I create an new Node

### Insert
* insert-1: Are there any nodes.
* insert-2: 




# 03 Array Binary Search
We require a solution that will take in a sorted array of numbers and a value to be found within the array.  The solution will return the index value of the matched value or undefined if the value is not located in the array

## Challenge
The search needs to be efficient by repeatedly narrowing the search field through the elimination of half of the remaining numbers after each pass. 

## Stretch Goal
I created four additional sorted arrays with lengths of 100, 10,000, 100,000, 1,000,000.  I then searched each array for a number in the top and bottom half of the array.  Prior to adding these tests, the time to execute the four standard tests was .057s.  AFTER adding the four additional arrays... .406s ... WHAAAAT!   

I tried 100,000,000 by itself and I busted the memory stack.  I backed down to 50,000,000 and searched the extremes of 1 and 50,000,000 and it ONLY TOOK 3.896s  AWESOME!!!

## Solution
![array-binary-search-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-binary-search.jpg)

# 02 Insert/Shift an Array
We require a solution that will accept both an array and a value to be inserted into the middle of the array

## Challenge
The primary challenge is to identify the middle of the array and insert the value at that position without using any built in methods.

## Solution
![array-shift-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-shift.jpg)

# 01 Reverse an Array
We require a solution that will reverse the contents of an array without using an array method to accomplish the task.

## Challenge
See above

## Solution
![array-reverse-whiteboard](https://raw.githubusercontent.com/dlchambersjr/data-structures-and-algorithms/master/assets/array-reverse.jpg)
